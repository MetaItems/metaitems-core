defmodule Metaitems.Repo.Migrations.AddToUsersTable do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :username, :string
      add :avatar_url, :string
      add :bio, :string
      add :website, :string
      add :twitter, :string
      add :verified, :boolean, null: false, default: false
    end
  end
end
