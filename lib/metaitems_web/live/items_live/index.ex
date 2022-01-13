defmodule MetaitemsWeb.ItemsLive.Index do
  use MetaitemsWeb, :live_view

  alias Metaitems.Context.Accounts
  alias Metaitems.Accounts.User

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.PageView, "index.html", assigns)
  end

  @impl true
  def mount(_params, session, socket) do
    socket = assign_default(session, socket)
    changeset = Accounts.change_user_registration(%User{})
    {:ok,
      socket
      |> assign(changeset: changeset)
      |> assign(triger_submit: false)
    }
  end


end
