defmodule Metaitems.Items.Item do
  use Ecto.Schema
  import Ecto.Changeset

  schema "items" do
    field :url_id, :string
    field :name, :string
    field :description, :string
    field :photo_url, :string
    field :quantity, :integer

    field :review_score, :integer, default: 0
    field :royalties, :decimal, default: 2.5
    field :total_comments, :integer, default: 0
    field :total_likes, :integer, default: 0
    field :total_reviews, :integer, default: 0
    field :type, :string
    field :unlock_content, :string
    belongs_to :user, Metaitems.Accounts.User

    has_many :likes, Metaitems.Likes.Like, foreign_key: :liked_id
    has_many :comments, Metaitems.Comments.Comment

    ###############
    field :thumbnail_url, :string
    field :asset_id, :string
    field :policy_id, :string
    field :fingerprint, :string
    field :metadata, :map, default: %{}
    field :asset_data, :map, default: %{}
    field :asset_history, :map, default: %{}
    field :asset_transactions, :map, default: %{}
    field :asset_addresses, :map, default: %{}



    timestamps()
  end

  @doc false
  def changeset(item, attrs) do
    item
    |> cast(attrs, [:url_id, :name, :description, :photo_url, :type, :unlock_content, :royalties, :quantity])
    |> validate_required([:url_id, :name, :photo_url])
  end
end
