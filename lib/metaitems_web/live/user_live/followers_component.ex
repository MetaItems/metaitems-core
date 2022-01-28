defmodule MetaitemsWeb.UserLive.Profile.FollowersComponent do
  use MetaitemsWeb, :live_component

  alias Metaitems.Uploaders.Avatar

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.UserProfileView, "followers_component.html", assigns)
  end
end
