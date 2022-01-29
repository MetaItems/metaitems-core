defmodule Metaitems.Context.Items do
  @moduledoc """
  The Items context.
  """

  import Ecto.Query, warn: false
  alias Metaitems.Repo

  alias Metaitems.Items.Item
  alias Metaitems.Accounts.User

  @doc """
  Returns the list of items.

  ## Examples

      iex> list_items()
      [%Item{}, ...]

  """
  def list_items do
    Repo.all(Item)
  end

  @doc """
  Gets a single item.

  Raises `Ecto.NoResultsError` if the Item does not exist.

  ## Examples

      iex> get_item!(123)
      %Item{}

      iex> get_item!(456)
      ** (Ecto.NoResultsError)

  """
  def get_item!(id) do
    Repo.get!(Item, id)
    |> Repo.preload([:user, :likes])
  end

  @doc """
  Creates a item.

  ## Examples

      iex> create_item(%{field: value})
      {:ok, %Item{}}

      iex> create_item(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_item_2(attrs \\ %{}) do
    %Item{}
    |> Item.changeset(attrs)
    |> Repo.insert()
  end

  def create_item(%Item{} = item, attrs \\ %{}, user) do
    IO.inspect(item)
    item = Ecto.build_assoc(user, :items, put_url_id(item))
    changeset = Item.changeset(item, attrs)
    update_items_count = from(u in User, where: u.id == ^user.id)

    Ecto.Multi.new()
    |> Ecto.Multi.update_all(:update_items_count, update_items_count, inc: [items_count:  1])
    |> Ecto.Multi.insert(:item, changeset)
    |> Repo.transaction()
  end

  # Generates a base64-encoding 8 bytes
  defp put_url_id(item) do
    url_id = Base.encode64(:crypto.strong_rand_bytes(8), padding: false)

    %Item{item | url_id: url_id}
  end

  def get_item_by_url!(id) do
    Repo.get_by!(Item, url_id: id)
    |> Repo.preload([:user, :likes])
  end

  @doc """
  Returns the list of paginated items of a given user id.

  ## Examples

      iex> list_user_items(page: 1, per_page: 10, user_id: 1)
      [%{photo_url: "", url_id: ""}, ...]

  """
  def list_profile_items(page: page, per_page: per_page, user_id: user_id) do
    Item
    |> select([i], map(i, [:url_id, :photo_url, :name]))
    |> where(user_id: ^user_id)
    |> limit(^per_page)
    |> offset(^((page - 1) * per_page))
    |> order_by(desc: :id)
    |> Repo.all
  end

  @doc """
  Updates a item.

  ## Examples

      iex> update_item(item, %{field: new_value})
      {:ok, %Item{}}

      iex> update_item(item, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_item(%Item{} = item, attrs) do
    item
    |> Item.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a item.

  ## Examples

      iex> delete_item(item)
      {:ok, %Item{}}

      iex> delete_item(item)
      {:error, %Ecto.Changeset{}}

  """
  def delete_item(%Item{} = item) do
    Repo.delete(item)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking item changes.

  ## Examples

      iex> change_item(item)
      %Ecto.Changeset{data: %Item{}}

  """
  def change_item(%Item{} = item, attrs \\ %{}) do
    Item.changeset(item, attrs)
  end
end
