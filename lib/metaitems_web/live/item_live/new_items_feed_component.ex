defmodule MetaitemsWeb.ItemLive.NewItemsFeedComponent do
  use MetaitemsWeb, :live_component

  alias Metaitems.Uploaders.Avatar
  alias Metaitems.Context.Comments
  alias Metaitems.Comments.Comment

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.ItemView, "new_items_feed_component.html", assigns)
  end

  @impl true
  def mount(socket) do
    {:ok,
      socket
      |> assign(changeset: Comments.change_comment(%Comment{})),
      temporary_assigns: [comments: []]}
  end

  @impl true
  def handle_event("save", %{"comment" => comment_param}, socket) do
    %{"body" => body} = comment_param
    current_user = socket.assigns.current_user
    post = socket.assigns.post

    if body == "" do
      {:noreply, socket}
    else
      comment = Comments.create_comment(current_user, post, comment_param)
      {:noreply,
        socket
        |> update(:comments, fn comments -> [comment | comments] end)
        |> assign(changeset: Comments.change_comment(%Comment{}))}
    end
  end
end
