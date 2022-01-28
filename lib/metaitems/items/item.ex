defmodule Metaitems.Items.Item do
  use Ecto.Schema
  import Ecto.Changeset

  schema "items" do
    field :url_id, :string
    field :name, :string
    field :description, :string
    field :photo_url, :string
    field :price, :decimal, default: 0.01
    field :quantity, :integer

    field :review_score, :integer, default: 0
    field :royalties, :decimal, default: 0.0
    field :total_comments, :integer, default: 0
    field :total_likes, :integer, default: 0
    field :total_reviews, :integer, default: 0
    field :type, :string
    field :unlock_content, :string
    belongs_to :user, Metaitems.Accounts.User

    timestamps()
  end

  @doc false
  def changeset(item, attrs) do
    item
    |> cast(attrs, [:url_id, :name, :description, :photo_url, :type, :price, :unlock_content, :royalties, :quantity])
    |> validate_required([:url_id, :name, :photo_url])
  end
end
