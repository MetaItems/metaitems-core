defmodule MetaitemsWeb.Layout.HeaderNavComponent do
  use Phoenix.LiveComponent

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.LayoutView, "menu/header_nav_component.html", assigns)
  end
end
