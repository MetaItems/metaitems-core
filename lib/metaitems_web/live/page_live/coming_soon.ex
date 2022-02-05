defmodule MetaitemsWeb.PageLive.ComingSoon do
  use MetaitemsWeb, :live_view


  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.PageView, "coming_soon.html", assigns)
  end

  @impl true
  def mount(_params, session, socket) do
    socket = assign_defaults(session, socket)

    {:ok,
    socket
    }
  end
end
