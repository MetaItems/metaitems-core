defmodule MetaitemsWeb.AdminLive.PolicyImport do
  use MetaitemsWeb, :live_view

  alias Metaitems.Context.{Accounts, Items}
  alias Metaitems.Accounts.User
  alias Metaitems.Items.Item
  alias Cardanoex.{Asset, Address, Wallet, Util, Transaction}



  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.AdminSettingsView, "policy_import.html", assigns)
  end

  @impl true
  def mount(_params, session, socket) do
    socket = assign_defaults(session, socket)
    admin_settings_path = Routes.live_path(socket, __MODULE__)
    settings_path = Routes.live_path(socket, MetaitemsWeb.UserLive.Settings)
    pass_settings_path = Routes.live_path(socket, MetaitemsWeb.UserLive.PassSettings)
    wallet_settings_path = Routes.live_path(socket, MetaitemsWeb.WalletLive.WalletSettings)

    user = socket.assigns.current_user
    # changeset = Accounts.change_user(user)

    {:ok,
      socket
      # |> assign(changeset: changeset)
      |> assign(settings_path: settings_path,
        pass_settings_path: pass_settings_path,
        wallet_settings_path: wallet_settings_path,
        admin_settings_path: admin_settings_path
        )

    }
  end

  @impl true
  def handle_params(_params, uri, socket) do
    {:noreply,
      socket
      |> assign(current_uri_path: URI.parse(uri).path)}
  end

  @impl true
  def handle_event("get_assets", %{"params" => %{"policy_id" => id, "qty" => qty}}, socket) do
    # id = params["policy_id"]
    # qty = params["qty"]
    pages = if qty <= 100, do: 1, else: div(String.to_integer(qty),100) + 1
    IO.inspect(id)
    IO.inspect(pages)

    num = if pages != 1, do: Enum.to_list(1..pages), else: 1
    # num = [2]
    with asset_ids <- Enum.map(num, fn i ->
                  with {:ok, asset_ids} <- Blockfrost.Cardano.Assets.specific_policy_assets(CardanoMainNet, id, [count: 100, page: i]) do
                    asset_ids
                  else
                    {:error, err} -> err
                  end
                end),
                assets <- List.flatten(asset_ids) |> Enum.map(fn x -> x.asset end),
                asset <- Enum.map(assets, fn x ->
                  with {:ok, data} <- Blockfrost.Cardano.Assets.specific_asset(CardanoMainNet, x) do
                    # data
                    create_item(data, socket)
                  else
                    {:error, err} -> err
                  end
                end)
        do
          # Enum.map(asset, fn x -> create_item(x, socket) end)
        {:ok, asset}
      else
        {:error, error} -> {:error, error}
      end

    {:noreply, socket}
  end






  def create_item(item, socket) do
    empty = is_empty?(item)
    items = has_data?(item)
    metadata = has_metadata?(item)
    # cannot use guards here for some reason,
    # check if asset has data in it
    if empty != false and items != false do
      if metadata != false do
        items = Map.merge(items, metadata)
      end

      IO.inspect(items)
      case Items.create_item(%Item{}, items, socket.assigns.current_user) do
        {:ok, _item} ->
          {:noreply, socket}

        {:error, %Ecto.Changeset{} = changeset} ->
          {:noreply, assign(socket, changeset: changeset)
        }
      end
    end

  end

  defp has_data?(x) when x.quantity != "0" do
    item = Map.new(
      asset_id: x.asset,
      policy_id: x.policy_id,
      fingerprint: x.fingerprint,
      name: x.onchain_metadata.name,
      photo_url: x.onchain_metadata.image,
      quantity: x.quantity,
      metadata: x.metadata,
      asset_data: x
    )
  end
  defp has_data?(x) when x.quantity == "0", do: false

  defp has_metadata?(x) when x.metadata != nil do
    item = Map.new(
      description: x.metadata.description,
      thumbnail_url: x.metadata.logo
    )
  end
  defp has_metadata?(x) when x.metadata == nil, do: false
  def is_empty?(x) when x == nil, do: false
  def is_empty?(x) when x != nil, do: true


end
