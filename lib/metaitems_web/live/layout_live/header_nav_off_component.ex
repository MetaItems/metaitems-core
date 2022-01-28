defmodule MetaitemsWeb.Layout.HeaderNavOffComponent do
  use Phoenix.LiveComponent

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.LayoutView, "menu/logged_off.html", assigns)
  end
end
