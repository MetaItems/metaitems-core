defmodule MetaitemsWeb.UserLive.FollowComponent do
  use MetaitemsWeb, :live_component

  alias Metaitems.Context.Accounts

  @impl true
  def update(assigns, socket) do
    get_btn_status(socket, assigns)
  end

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.UserProfileView, "follow_component.html", assigns)
  end

  @impl true
  def handle_event("toggle-status", _params, socket) do
    current_user = socket.assigns.current_user
    user = socket.assigns.user

    :timer.sleep(300)
    if Accounts.following?(current_user.id, user.id) do
      unfollow(socket, current_user.id, user.id)
    else
      follow(socket, current_user, user)
    end
  end

  defp get_btn_status(socket, assigns) do
    if Accounts.following?(assigns.current_user.id, assigns.user.id) do
      get_socket_assigns(socket, assigns, "Unfollow", "user-profile-unfollow-btn")
    else
      get_socket_assigns(socket, assigns, "Follow", "user-profile-follow-btn")
    end
  end

  defp get_socket_assigns(socket, assigns, btn_name, btn_styles) do
    {:ok,
      socket
      |> assign(assigns)
      |> assign(follow_btn_name: btn_name)
      |> assign(follow_btn_styles: btn_styles)}
  end

  defp follow(socket, current_user, user) do
    updated_user = Accounts.create_follow(current_user, user, current_user)
    # Message sent to the parent liveview to update totals
    send(self(), {__MODULE__, :update_totals, updated_user})
    {:noreply,
      socket
      |> assign(follow_btn_name: "Unfollow")
      |> assign(follow_btn_styles: "user-profile-unfollow-btn")}
  end

  defp unfollow(socket, current_user_id, user_id) do
    updated_user = Accounts.unfollow(current_user_id, user_id)
    # Message sent to the parent liveview to update totals
    send(self(), {__MODULE__, :update_totals, updated_user})
    {:noreply,
      socket
      |> assign(follow_btn_name: "Follow")
      |> assign(follow_btn_styles: "user-profile-follow-btn")}
  end
end
