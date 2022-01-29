defmodule MetaitemsWeb.ItemLive.LikeComponent do
  use MetaitemsWeb, :live_component

  alias Metaitems.Context.Likes

  @impl true
  def update(assigns, socket) do
    get_btn_status(socket, assigns)
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div>
      <button
        phx-target={@myself}
        phx-click="toggle-status"
        class="{@w_h} h-8 w-8 focus:outline-none">

        <%= @icon %>

      </button>
    </div>
    """
  end

  @impl true
  def handle_event("toggle-status", _params, socket) do
    current_user = socket.assigns.current_user
    liked = socket.assigns.liked

    if liked?(current_user.id, liked.likes) do
      unlike(socket, current_user.id, liked)
    else
      like(socket, current_user, liked)
    end
  end

  defp like(socket, current_user, liked) do
    Likes.create_like(current_user, liked)
    send_msg(liked)

    {:noreply,
      socket
      |> assign(icon: unlike_icon(socket.assigns))}
  end

  defp unlike(socket, current_user_id, liked) do
    Likes.unlike(current_user_id, liked)
    send_msg(liked)

    {:noreply,
      socket
      |> assign(icon: like_icon(socket.assigns))}
  end

  defp send_msg(liked) do
    msg = get_struct_msg_atom(liked)
    send(self(), {__MODULE__, msg, liked.id})
  end

  defp get_btn_status(socket, assigns) do
    if liked?(assigns.current_user.id, assigns.liked.likes) do
      get_socket_assigns(socket, assigns, unlike_icon(assigns))
    else
      get_socket_assigns(socket, assigns, like_icon(assigns))
    end
  end

  defp get_socket_assigns(socket, assigns, icon) do
    {:ok,
      socket
      |> assign(assigns)
      |> assign(icon: icon)}
  end

  defp get_struct_name(struct) do
    struct.__struct__
    |> Module.split()
    |> List.last()
    |> String.downcase()
  end

  defp get_struct_msg_atom(struct) do
    name = get_struct_name(struct)
    update_struct_likes = "update_#{name}_likes"
    String.to_atom(update_struct_likes)
  end

  defp like_icon(assigns) do
    ~H"""
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
    """
  end

  defp unlike_icon(assigns) do
    ~H"""
    <svg class="text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
    </svg>
    """
  end

  # Returns true if id found in list
  defp liked?(user_id, likes) do
    Enum.any?(likes, fn l ->
      l.user_id == user_id
    end)
  end
end
