defmodule Metaitems.Repo.Migrations.CreateItems do
  use Ecto.Migration

  def change do
    create table(:items) do
      add :url_id, :string
      add :name, :string
      add :description, :text
      add :photo_url, :string
      add :total_likes, :integer, default: 0
      add :total_comments, :integer, default: 0
      add :total_reviews, :integer, default: 0
      add :review_score, :integer, default: 0
      add :type, :string
      add :price, :decimal, default: 0.01
      add :unlock_content, :string
      add :royalties, :decimal, default: 0.0
      add :quantity, :integer, default: 1
      add :user_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:items, [:user_id])
    create unique_index(:items, [:url_id])
  end
end
