defmodule MetaitemsWeb.ItemsLive.Index do
  use MetaitemsWeb, :live_view

  alias Metaitems.Context.Accounts
  alias Metaitems.Accounts.User

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.ItemView, "index.html", assigns)
  end

  @impl true
  def mount(_params, session, socket) do
    socket = assign_defaults(session, socket)
    changeset = Accounts.change_user_registration(%User{})
    {:ok,
      socket
      |> assign(changeset: changeset)
      |> assign(triger_submit: false)
    }
  end

  @doc """
  We updated this function for when the username param is present,
  get the user and assign it along with page title to the socket
  """
  @impl true
  def handle_params(_params, uri, socket) do
    {:noreply,
      socket
      |> assign(current_uri_path: URI.parse(uri).path)}
  end

end
