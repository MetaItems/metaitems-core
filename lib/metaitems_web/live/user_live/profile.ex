defmodule MetaitemsWeb.UserLive.Profile do
  use MetaitemsWeb, :live_view

  alias Metaitems.Context.Accounts
  alias MetaitemsWeb.UserLive.FollowComponent

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.UserProfileView, "profile.html", assigns)
  end

  @impl true
  def mount(_params, session, socket) do
    socket = assign_defaults(session, socket)
    {:ok, socket}
  end

  @impl true
  def handle_info({FollowComponent, :update_totals, updated_user}, socket) do
    {:noreply, socket |> assign(user: updated_user)}
  end



end
