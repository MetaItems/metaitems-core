defmodule Metaitems.Context.Items do
  @moduledoc """
  The Items context.
  """

  import Ecto.Query, warn: false
  alias Metaitems.Repo

  alias Metaitems.Items.Item
  alias Metaitems.Accounts.User
  alias Metaitems.Comments.Comment
  alias Metaitems.Likes.Like

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
    likes_query = Like |> select([l], l.user_id)

    Repo.get!(Item, id)
    |> Repo.preload([:user, likes: likes_query])
  end

  def get_item_feed!(id) do
    query =
      from c in Comment,
      select: %{id: c.id, row_number: over(row_number(), :items_partition)},
      windows: [items_partition: [partition_by: :item_id, order_by: [desc: :id]]]
    comments_query =
      from c in Comment,
      join: r in subquery(query),
      on: c.id == r.id and r.row_number <= 2
    likes_query = Like |> select([l], l.user_id)

    Item
    |> preload([:user, likes: ^likes_query, comments: ^{comments_query, [:user, likes: likes_query]}])
    |> Repo.get!(id)
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
    likes_query = Like |> select([l], l.user_id)

    Repo.get_by!(Item, url_id: id)
    |> Repo.preload([:user, likes: likes_query])
  end

  @doc """
  Returns the list of paginated items of a given user id.

  ## Examples

      iex> list_user_items(page: 1, per_page: 10, user_id: 1)
      [%{photo_url: "", url_id: ""}, ...]

  """
  def list_profile_items(page: page, per_page: per_page, user_id: user_id) do
    Item
    |> select([i], map(i, [:id, :url_id, :photo_url, :name, :description, :quantity, :total_likes, :inserted_at]))
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

  @doc """
  Returns the list of paginated items of a given user id
  And items of following list of given user id
  With user and likes preloaded
  With 2 most recent comments preloaded with user and likes
  User, page, and per_page are given with the socket assigns
  ## Examples

      iex> get_accounts_feed(following_list, assigns)
      [%{photo_url: "", url_id: ""}, ...]

  """
  def get_accounts_feed(following_list, assigns) do
    user = assigns.current_user
    page = assigns.page
    per_page = assigns.per_page
    query =
      from c in Comment,
      select: %{id: c.id, row_number: over(row_number(), :items_partition)},
      windows: [items_partition: [partition_by: :item_id, order_by: [desc: :id]]]
    comments_query =
      from c in Comment,
      join: r in subquery(query),
      on: c.id == r.id and r.row_number <= 2

    Item
    |> where([p], p.user_id in ^following_list)
    |> or_where([p], p.user_id == ^user.id)
    |> limit(^per_page)
    |> offset(^((page - 1) * per_page))
    |> order_by(desc: :id)
    |> preload([:user, :likes, comments: ^{comments_query, [:user, :likes]}])
    |> Repo.all()
  end

  def get_accounts_feed_total(following_list, assigns) do
    user = assigns.current_user

    Item
    |> where([p], p.user_id in ^following_list)
    |> or_where([p], p.user_id == ^user.id)
    |> select([p], count(p.id))
    |> Repo.one()
  end
end
