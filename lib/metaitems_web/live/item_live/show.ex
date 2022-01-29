defmodule MetaitemsWeb.ItemLive.Show do
  use MetaitemsWeb, :live_view

  alias Metaitems.Context.Items
  alias Metaitems.Uploaders.Avatar
  alias MetaitemsWeb.ItemLive.LikeComponent


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
    |> assign(item: item)
    }
  end

  @impl true
  def handle_info({LikeComponent, :update_item_likes, item_id}, socket) do
    {:noreply,
      socket
      |> assign(item: Items.get_item!(item_id))
    }
  end


end
