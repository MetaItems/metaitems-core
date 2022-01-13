defmodule Metaitems.Repo do
  use Ecto.Repo,
    otp_app: :metaitems,
    adapter: Ecto.Adapters.Postgres
end
