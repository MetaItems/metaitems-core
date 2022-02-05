defmodule MetaitemsWeb.ComingSoonController do
  use MetaitemsWeb, :controller

  def index(conn, _params) do
    render(conn, "coming_soon.html")
  end
end
