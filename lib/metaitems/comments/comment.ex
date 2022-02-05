defmodule Metaitems.Comments.Comment do
  use Ecto.Schema
  import Ecto.Changeset

  schema "comments" do
    field :body, :string
    field :total_likes, :integer, default: 0
    belongs_to :item, Metaitems.Items.Item
    belongs_to :user, Metaitems.Accounts.User
    has_many :likes, Metaitems.Likes.Like, foreign_key: :liked_id

    timestamps()
  end

  @doc false
  def changeset(comment, attrs) do
    comment
    |> cast(attrs, [:body])
    |> validate_required([:body])
  end
end
