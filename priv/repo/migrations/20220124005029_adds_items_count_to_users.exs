defmodule Metaitems.Repo.Migrations.AddsItemsCountToUsers do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :items_count, :integer, default: 0
    end
  end
end
