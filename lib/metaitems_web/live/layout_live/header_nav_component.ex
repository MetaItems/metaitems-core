defmodule MetaitemsWeb.Layout.HeaderNavComponent do
  use Phoenix.LiveComponent

  alias MetaitemsWeb.LiveHelpers

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.LayoutView, "menu/header_nav_component.html", assigns)
  end

  @impl true
  def mount(_params, session, socket) do
    socket = LiveHelpers.assign_defaults(session, socket)
    {:ok, socket}
  end

end
