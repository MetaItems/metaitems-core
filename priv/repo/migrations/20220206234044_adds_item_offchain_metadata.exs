defmodule Metaitems.Repo.Migrations.AddsItemOffchainMetadata do
  use Ecto.Migration

  def change do
    alter table(:items) do
      remove :price
      add :thumbnail_url, :string
      add :asset_id, :string
      add :policy_id, :string
      add :fingerprint, :string
      add :metadata, :map, default: %{}
      add :asset_data, :map, default: %{}
      add :asset_history, :map, default: %{}
      add :asset_transactions, :map, default: %{}
      add :asset_addresses, :map, default: %{}
    end

    create index(:items, [:asset_id, :policy_id])
    create unique_index(:items, [:asset_id])
  end
end
