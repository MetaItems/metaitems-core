defmodule MetaitemsWeb.ModalComponent do
  use MetaitemsWeb, :live_component
  use Phoenix.LiveComponent
  alias MetaitemsWeb.Uploaders.Avatar

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.ComponentHelpersView, "modal_component.html", assigns)
  end

    @impl true
  def handle_event("close", _, socket) do
    {:noreply, push_patch(socket, to: socket.assigns.return_to)}
  end
end
