defmodule MetaitemsWeb.ItemLive.Showing do
  use MetaitemsWeb, :live_view

  alias Metaitems.Context.Items
  alias Metaitems.Uploaders.Avatar


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


end
