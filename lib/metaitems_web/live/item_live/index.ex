defmodule MetaitemsWeb.ItemLive.Index do
  use MetaitemsWeb, :live_view

  alias Metaitems.Context.{Accounts, Items}
  alias Metaitems.Accounts.User
  alias MetaitemsWeb.UserLive.FollowComponent
  alias MetaitemsWeb.ItemLive.LikeComponent
  alias MetaitemsWeb.ItemLike.NewItemsFeedComponent

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.ItemView, "index.html", assigns)
  end

  @impl true
  def mount(_params, session, socket) do
    socket = assign_defaults(session, socket)
    changeset = Accounts.change_user_registration(%User{})
    {:ok,
      socket
      |> assign(changeset: changeset)
      |> assign(trigger_submit: false)
      # main page assigns
      |> assign(user_feed: [])
      |> assign(page: 1, per_page: 8),
      temporary_assigns: [user_feeds: []]
      # this temporary assign is not working,
      # it just replaces on mount...???
    }
  end

  @impl true
  def handle_params(_params, _uri, socket) do
    {:noreply,
      socket
      |> assign(live_action: apply_action(socket.assigns.current_user))
      |> assign_items()
    }
  end

  @impl true
  def handle_event("load-more-profile-items", _, socket) do
    {:noreply, socket |> load_items}
  end

  defp load_items(socket) do
    total_items = socket.assigns.accounts_feed_total
    page = socket.assigns.page
    per_page = socket.assigns.per_page
    total_pages = ceil(total_items / per_page)

    if page == total_pages do
      socket
    else
      socket
      |> update(:page, &(&1 + 1))
      |> assign_user_feed()
    end
  end

  @impl true
  def handle_info({LikeComponent, :update_comment_likes, _}, socket) do
    {:noreply, socket}
  end

  @impl true
  def handle_info({LikeComponent, :update_item_likes, item}, socket) do
    item_feed = Items.get_item_feed!(item.id)
    {:noreply,
      socket
      |> update(:user_feed, fn user_feed -> [item_feed | user_feed] end)}
  end

  @impl true
  def handle_info({FollowComponent, :update_totals, _}, socket) do
    {:noreply, socket}
  end

  defp apply_action(current_user) do
    if !current_user, do: :root_path
  end

  ###############
  defp assign_items(socket) do
    if socket.assigns.current_user do
      current_user = socket.assigns.current_user
      following_list = Accounts.get_following_list(current_user)
      accounts_feed_total = Items.get_accounts_feed_total(following_list, socket.assigns)
      random_8_users = Accounts.random_8(current_user)

      socket
      |> assign(users: random_8_users)
      |> assign(following_list: following_list)
      |> assign(accounts_feed_total: accounts_feed_total)
      |> assign_user_feed()
    else
      socket
    end
  end

  defp assign_user_feed(socket) do
    current_feed = socket.assigns.user_feed |> IO.inspect
    new_feed = Items.get_accounts_feed(socket.assigns.following_list, socket.assigns)
    socket |> assign(user_feed: current_feed ++ new_feed)
    # socket |> update(:user_feed, fn user_feed -> [new_feed | current_feed] end)
  end
end
