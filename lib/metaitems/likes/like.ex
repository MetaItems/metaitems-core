defmodule Metaitems.Likes.Like do
  use Ecto.Schema

  schema "likes" do
    field :liked_id, :integer
    belongs_to :user, Metaitems.Accounts.User

    timestamps()
  end
end
