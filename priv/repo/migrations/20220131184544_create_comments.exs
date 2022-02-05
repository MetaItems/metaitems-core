defmodule Metaitems.Repo.Migrations.CreateComments do
  use Ecto.Migration

  def change do
    create table(:comments) do
      add :body, :text
      add :total_likes, :integer, default: 0
      add :item_id, references(:items, on_delete: :nothing)
      add :user_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:comments, [:item_id])
    create index(:comments, [:user_id])
  end
end
