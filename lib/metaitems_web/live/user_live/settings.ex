defmodule MetaitemsWeb.UserLive.Settings do
  use MetaitemsWeb, :live_view

  alias Metaitems.Context.Accounts
  alias Metaitems.Accounts.User

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.UserSettingsView, "edit.html", assigns)
  end

  @impl true
  def mount(_params, session, socket) do
    socket = assign_default(session, socket)
    changeset = Accounts.change_user(socket.assigns.current_user)
    settings_path = Routes.live_path(socket, __MODULE__)
    pass_settings_path = Routes.live_path(socket, MetaitemsWeb.UserLive.PassSettings)

    {:ok,
      socket
      |> assign(changeset: changeset)
      |> assign(page_title: "Edit Profile")
      |> assign(settings_path: settings_path, pass_settings_path: pass_settings_path)
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
end