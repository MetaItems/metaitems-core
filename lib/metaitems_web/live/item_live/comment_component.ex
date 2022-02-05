defmodule MetaitemsWeb.ItemLive.CommentComponent do
  use MetaitemsWeb, :live_component

  alias Metaitems.Uploaders.Avatar

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.ItemView, "comment_component.html", assigns)
  end
end
