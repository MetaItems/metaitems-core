defmodule MetaitemsWeb.UserLive.Profile.FollowingComponent do
  use MetaitemsWeb, :live_component

  alias Metaitems.Uploaders.Avatar

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.UserProfileView, "following_component.html", assigns)
  end
end
