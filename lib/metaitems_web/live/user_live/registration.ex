defmodule MetaitemsWeb.UserLive.RegistrationComponent do
  use MetaitemsWeb, :live_component

  alias Metaitems.Context.Accounts
  alias Metaitems.Accounts.User
  alias MetaitemsWeb.UserAuth

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
  def handle_params(_params, _uri, socket) do
    {:noreply,
      socket
      |> assign(live_action: apply_action(socket.assigns.current_user))}
  end

  defp apply_action(current_user) do
    if !current_user, do: :root_path
  end

  @impl true
  def handle_event("validate", %{"user" => user_params}, socket) do
    changeset =
      %User{}
      |> User.registration_changeset(user_params)
      |> Map.put(:action, :validate)
    {:noreply, socket |> assign(changeset: changeset)}
  end

  def handle_event("save", %{"user" => user_params}, socket) do
    {:noreply, assign(socket, trigger_submit: true)}
    # case Accounts.register_user(user_params) do
    #   {:ok, user} ->
    #     {:ok, _} =
    #       Accounts.deliver_user_confirmation_instructions(
    #         user,
    #         &Routes.user_confirmation_url(socket, :edit, &1)
    #       )

    #     socket
    #     |> put_flash(:info, "User created successfully.")
    #     |> UserAuth.log_in_user(user)

    #   {:error, %Ecto.Changeset{} = changeset} ->
    #     render(socket, "new.html", changeset: changeset)
    # end
  end
end
