defmodule MetaitemsWeb.UserLive.RegistrationComponent do
  use MetaitemsWeb, :live_component

  alias Metaitems.Context.Accounts
  alias Metaitems.Accounts.User

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.UserRegistrationView, "new.html", assigns)
  end

  @impl true
  def mount(socket) do
    # socket = assign_defaults(session, socket)
    changeset = Accounts.change_user_registration(%User{})
    {:ok,
      socket
      |> assign(changeset: changeset)
      |> assign(triger_submit: false)
    }
  end

  @impl true
  def handle_event("validate", %{"user" => user_params}, socket) do
    changeset =
      %User{}
      |> User.registration_changeset(user_params)
      |> Map.put(:action, :validate)
    {:noreply, socket |> assign(changeset: changeset)}
  end

  def handle_event("save", _, socket) do
    {:noreply, assign(socket, trigger_submit: true)}
  end
end
