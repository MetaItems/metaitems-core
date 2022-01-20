defmodule MetaitemsWeb.UserLive.PassSettings do
  use MetaitemsWeb, :live_view

  alias Metaitems.Context.Accounts
  alias Metaitems.Accounts.User


  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.UserSettingsView, "edit_pass.html", assigns)
  end

  @impl true
  def mount(_params, session, socket) do
    socket = assign_defaults(session, socket)
    settings_path = Routes.live_path(socket, MetaitemsWeb.UserLive.Settings)
    wallet_settings_path = Routes.live_path(socket, MetaitemsWeb.WalletLive.WalletSettings)
    pass_settings_path = Routes.live_path(socket, __MODULE__)
    user = socket.assigns.current_user

    {:ok,
      socket
      |> assign(settings_path: settings_path,
          pass_settings_path: pass_settings_path,
          wallet_settings_path: wallet_settings_path)
      |> assign(:page_title, "Change Password")
      |> assign(changeset: Accounts.change_user_password(user))
    }
  end


    @impl true
  def handle_event("save", %{"user" => params}, socket) do
    %{"current_password" => password} = params
    case Accounts.update_user_password(socket.assigns.current_user, password, params) do
      {:ok, _user} ->
        {:noreply,
          socket
          |> put_flash(:info, "Password updated successfully.")
          |> push_redirect(to: socket.assigns.pass_settings_path)}

      {:error, changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end
end
