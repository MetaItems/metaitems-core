defmodule MetaitemsWeb.UserLive.Settings do
  use MetaitemsWeb, :live_view

  alias Metaitems.Context.Accounts
  alias Metaitems.Accounts.User
  alias Metaitems.Uploaders.Avatar

  @extension_whitelist ~w(.jpg .jpeg .png)

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.UserSettingsView, "edit.html", assigns)
  end

  @impl true
  def mount(_params, session, socket) do
    socket = assign_defaults(session, socket)
    changeset = Accounts.change_user(socket.assigns.current_user)
    settings_path = Routes.live_path(socket, __MODULE__)
    pass_settings_path = Routes.live_path(socket, MetaitemsWeb.UserLive.PassSettings)

    # Make this part admin only later and format better
    wallet_settings_path = Routes.live_path(socket, MetaitemsWeb.WalletLive.WalletSettings)
    admin_settings_path = Routes.live_path(socket, MetaitemsWeb.AdminLive.PolicyImport)

    {:ok,
      socket
      |> assign(changeset: changeset)
      |> assign(page_title: "Edit Profile")
      |> assign(settings_path: settings_path,
          pass_settings_path: pass_settings_path,
          wallet_settings_path: wallet_settings_path,
          admin_settings_path: admin_settings_path
          )
      |> allow_upload(:avatar_url,
        accept: @extension_whitelist,
        max_file_size: 9_000_000,
        progress: &handle_progress/3,#Function that will handle automatic uploads
        auto_upload: true)
    }
  end

  @impl true
  def handle_event("validate", %{"user" => user_params}, socket) do
    changeset =
      socket.assigns.current_user
      |> Accounts.change_user(user_params)
      |> Map.put(:action, :validate)

    {:noreply, socket |> assign(changeset: changeset)}
  end

  @impl true
  def handle_event("save", %{"user" => user_params}, socket) do
    case Accounts.update_user(socket.assigns.current_user, user_params) do
      {:ok, _user} ->
        {:noreply,
          socket
          |> put_flash(:info, "User updated successfully")
          |> push_redirect(to: Routes.live_path(socket, MetaitemsWeb.UserLive.Settings))
      }
      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end

  @doc """
  We updated this function for when the username param is present,
  get the user and assign it along with page title to the socket
  """
  @impl true
  def handle_params(_params, uri, socket) do
    {:noreply,
      socket
      |> assign(current_uri_path: URI.parse(uri).path)}
  end

  defp handle_progress(:avatar_url, entry, socket) do
    # If file is already uploaded to tmp folder
    if entry.done? do
      avatar_url = Avatar.get_avatar_url(socket, entry)
      user_params = %{"avatar_url" => avatar_url}
      case Accounts.update_user(socket.assigns.current_user, user_params) do
        {:ok, _user} ->
          Avatar.update(socket, socket.assigns.current_user.avatar_url, entry)

          current_user = Accounts.get_user!(socket.assigns.current_user.id)
          {:noreply,
            socket
            |> put_flash(:info, "Avatar updated successfully")
            |> assign(current_user: current_user)}
        {:error, %Ecto.Changeset{} = changeset} ->
          {:noreply, assign(socket, :changeset, changeset)}
      end
    else
      {:noreply, socket}
    end
  end
end
