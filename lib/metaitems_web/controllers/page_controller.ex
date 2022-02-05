defmodule MetaitemsWeb.PageController do
  use MetaitemsWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def soon(conn, _params) do
    render(conn, "coming_soon.html")
  end
end
