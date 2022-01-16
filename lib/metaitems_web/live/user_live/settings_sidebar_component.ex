defmodule MetaitemsWeb.UserLive.SettingsSidebarComponent do
  use MetaitemsWeb, :live_component

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.UserSettingsView, "settings_sidebar_component.html", assigns)
  end
end
