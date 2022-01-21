defmodule MetaitemsWeb.WalletLive.WalletSettings do
  use MetaitemsWeb, :live_view

  alias Metaitems.Context.Accounts
  alias Metaitems.Accounts.User
  alias Cardanoex.{Asset, Address, Wallet, Util, Transaction}


  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.WalletSettingsView, "wallet.html", assigns)
  end

  @impl true
  def mount(_params, session, socket) do
    socket = assign_defaults(session, socket)
    wallet_settings_path = Routes.live_path(socket, __MODULE__)
    settings_path = Routes.live_path(socket, MetaitemsWeb.UserLive.Settings)
    pass_settings_path = Routes.live_path(socket, MetaitemsWeb.UserLive.PassSettings)

    user = socket.assigns.current_user
    changeset = Accounts.change_user(user)

    {:ok,
      socket
      |> assign(changeset: changeset)
      |> assign(settings_path: settings_path,
        pass_settings_path: pass_settings_path,
        wallet_settings_path: wallet_settings_path)
    }
  end

  @impl true
  def handle_params(_params, uri, socket) do
    {:noreply,
      socket
      |> assign(current_uri_path: URI.parse(uri).path)}
  end

  @impl true
  def handle_event("create_new_wallet", _params, socket) do
    changeset = socket.assigns.current_user

    # changeset =
    #   socket.assigns.current_user
    #   |> Wallets.change_user(wallet_params)
    #   |> Map.put(:action, :validate)

    # {:noreply, socket |> assign(changeset: changeset)}

    # {:ok, _} = Application.ensure_all_started(:blockfrost) |> IO.inspect

    # Create Cardano Wallet
    name = "Wallet #1"
    pass = "Super_Secret4321!"

    mnemonic = Util.generate_mnemonic()


    {:ok, wallet} = Wallet.create_wallet(name: name, mnemonic_sentence: mnemonic, passphrase: pass)
    # |> IO.inspect
    {:ok, transactions} = Transaction.list(wallet.id)

    # IO.inspect(wallet.id, label: "wallet id: ")
    {:ok, address} = Address.list(wallet.id)

    # IO.inspect(address)
    # base = Base.encode16(:crypto.hash(:sha256, "cool cat"))

    rand_policy = :crypto.strong_rand_bytes(35) |> Base.encode32(case: :lower, padding: false)
    IO.inspect(rand_policy, label: "PolicyId")


    # {:ok, _} = Blockfrost.Cardano.Addresses.address_details(CardanoTestNet, "addr_test1qrhylzg9ftka66luakj492nq047y7qm3dz9qygc99zxfru72t82m2n0y68ws0supkln7z3e8tfzr8xjn7gm342p3qltq7svtg4")
    # |> IO.inspect

    {:noreply, socket |> assign(changeset: changeset)}

  end

  # defp createLockingPolicyScript(address, networkId, expirationTime) {

  # }

  @impl true
  def handle_event("get_assets", _params, socket) do

    {:ok, _} = Blockfrost.Cardano.Addresses.address_details(CardanoTestNet, "addr_test1qrhylzg9ftka66luakj492nq047y7qm3dz9qygc99zxfru72t82m2n0y68ws0supkln7z3e8tfzr8xjn7gm342p3qltq7svtg4")
    |> IO.inspect
    # IO.inspect(wallet.id, label: "wallet id: ")
    {:ok, _assets} = Blockfrost.Cardano.Assets.specific_policy_assets(CardanoTestNet, "cc10a021353980c6fa4c6e9a013b07747f8532b65e8602a6ea8327b4", [count: 20, order: "desc"])
    |> IO.inspect

    {:ok, address} = Asset.get("cc10a021353980c6fa4c6e9a013b07747f8532b65e8602a6ea8327b4")
    IO.inspect(address)
    # {:ok, _} = Blockfrost.Cardano.Addresses.address_details(CardanoTestNet, "addr_test1qrhylzg9ftka66luakj492nq047y7qm3dz9qygc99zxfru72t82m2n0y68ws0supkln7z3e8tfzr8xjn7gm342p3qltq7svtg4")
    # |> IO.inspect

    {:noreply, socket}

  end



end
