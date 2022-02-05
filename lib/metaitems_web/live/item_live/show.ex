defmodule MetaitemsWeb.ItemLive.Show do
  use MetaitemsWeb, :live_view

  alias Metaitems.Context.{Items, Comments}
  alias Metaitems.Uploaders.Avatar
  alias MetaitemsWeb.ItemLive.LikeComponent
  alias Metaitems.Comments.Comment


  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.ItemView, "show.html", assigns)
  end

  @impl true
  def mount(%{"id" => id}, session, socket) do
    socket = assign_defaults(session, socket)
    item = Items.get_item_by_url!(URI.decode(id))
    {:ok,
    socket
    |> assign(changeset: Comments.change_comment(%Comment{}))
    |> assign(comments_section_update: "prepend")
    |> assign(item: item)
    |> assign(page: 1, per_page: 15)
    |> assign_comments()
    |> set_load_more_comments_btn(),
    temporary_assigns: [comments: []]
    }
  end

  defp assign_comments(socket) do
    current_user = socket.assigns.current_user

    if current_user do
      comments = Comments.list_item_comments(socket.assigns, public: false)
      socket |> assign(comments: comments)
    else
      comments = Comments.list_item_comments(socket.assigns, public: true)
      socket |> assign(comments: comments)
    end
  end

  defp set_load_more_comments_btn(socket) do
    item_total_comments = socket.assigns.item.total_comments
    per_page = socket.assigns.per_page

    if item_total_comments > per_page do
      socket |> assign(load_more_comments_btn: "flex")
    else
      socket |> assign(load_more_comments_btn: "hidden")
    end
  end

  @impl true
  def handle_info({LikeComponent, :update_comment_likes, comment_id}, socket) do
    comment = Comments.get_comment!(comment_id)
    {:noreply,
      socket
      |> update(:comments, fn comments -> [comment | comments] end)
    }
  end

  @impl true
  def handle_info({LikeComponent, :update_item_likes, item_id}, socket) do
    {:noreply,
      socket
      |> assign(item: Items.get_item!(item_id))
    }
  end

  @impl true
  def handle_event("load-more-comments", _, socket) do
    {:noreply,
      socket
      |> assign(comments_section_update: "append")
      |> load_comments()
    }
  end

  @impl true
  def handle_event("save", %{"comment" => comment_param}, socket) do
    %{"body" => body} = comment_param
    current_user = socket.assigns.current_user
    item = socket.assigns.item
    IO.inspect(comment_param)
    if body == "" do
      {:noreply, socket}
    else
      comment = Comments.create_comment(current_user, item, comment_param)
      {:noreply,
        socket
        |> update(:comments, fn comments -> [comment | comments] end)
        |> assign(comments_section_update: "prepend")
        |> assign(changeset: Comments.change_comment(%Comment{}))}
    end
  end

  defp load_comments(socket) do
    total_comments = socket.assigns.item.total_comments
    page = socket.assigns.page
    per_page = socket.assigns.per_page
    total_pages = ceil(total_comments / per_page)

    socket
    |> hide_btn?(page, total_pages)
    |> update(:page, &(&1 + 1))
    |> assign_comments()
  end

  defp hide_btn?(socket, page, total_pages) do
    if (page + 1) == total_pages do
      socket |> assign(load_more_comments_btn: "hidden")
    else
      socket
    end
  end


end
