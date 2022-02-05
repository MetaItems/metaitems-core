defmodule MetaitemsWeb.UserLive.Profile do
  use MetaitemsWeb, :live_view

  alias Metaitems.Context.{Accounts, Items}
  alias MetaitemsWeb.UserLive.FollowComponent

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.UserProfileView, "profile.html", assigns)
  end

  @impl true
  def mount(%{"username" => username}, session, socket) do
    socket = assign_defaults(session, socket)
    user = Accounts.profile(username)
    {:ok, socket
      |> assign(page: 1, per_page: 4)
      |> assign(user: user)
      |> assign(page_title: "@#{user.username}")
      |> assign(items: [])
      |> assign_items()
      # temporary_assigns: [items: []]
    }
  end

  ##############################
  # Load Created Items handlers
  ##############################
  defp assign_items(socket) do
    new_items = Items.list_profile_items(
      page: socket.assigns.page,
      per_page: socket.assigns.per_page,
      user_id: socket.assigns.user.id
    )
    socket
    |> assign(items: socket.assigns.items ++ new_items
    )
  end

  @impl true
  def handle_event("load-more-profile-items", _, socket) do
    {:noreply, socket |> load_items}
  end

  defp load_items(socket) do
    total_items = socket.assigns.user.items_count
    page = socket.assigns.page
    per_page = socket.assigns.per_page
    total_pages = ceil(total_items / per_page)

    if page == total_pages do
      socket
    else
      socket
      |> update(:page, &(&1 + 1))
      |> assign_items()
    end
  end

  ###########################
  # Follower function handlers
  ###############################

  @impl true
  def handle_params(_params, _uri, socket) do
    {:noreply, apply_action(socket, socket.assigns.live_action)}
  end

  @impl true
  def handle_info({FollowComponent, :update_totals, updated_user}, socket) do
    {:noreply, socket |> assign(user: updated_user)}
  end

  defp apply_msg_action(socket, :follow_component, updated_user) do
    socket |> assign(user: updated_user)
  end

  defp apply_msg_action(socket, _, _updated_user) do
    socket
  end

  defp apply_action(socket, :index) do
    live_action = get_live_action(socket.assigns.user, socket.assigns.current_user)

    socket |> assign(live_action: live_action)
  end

  defp apply_action(socket, :following) do
    following = Accounts.list_following(socket.assigns.user)
    socket |> assign(following: following)
  end

  defp apply_action(socket, :followers) do
    followers = Accounts.list_followers(socket.assigns.user)
    socket |> assign(followers: followers)
  end

  defp get_live_action(user, current_user) do
    cond do
      current_user && current_user == user -> :edit_profile
      current_user -> :follow_component
      true -> :login_btn
    end
  end

end
