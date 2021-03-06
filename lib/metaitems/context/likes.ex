defmodule Metaitems.Context.Likes do
  @moduledoc """
  The Likes context.
  """

  import Ecto.Query, warn: false
  alias Metaitems.Repo

  alias Metaitems.Likes.Like

  @doc """
  Returns the list of likes.

  ## Examples

      iex> list_likes()
      [%Like{}, ...]

  """
  def list_likes do
    Repo.all(Like)
  end

  @doc """
  Gets a single like.

  Raises `Ecto.NoResultsError` if the Like does not exist.

  ## Examples

      iex> get_like!(123)
      %Like{}

      iex> get_like!(456)
      ** (Ecto.NoResultsError)

  """
  def get_like!(id), do: Repo.get!(Like, id)

  @doc """
  Creates a like.

  ## Examples

      iex> create_like(%{field: value})
      {:ok, %Like{}}

      iex> create_like(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  # def create_like(attrs \\ %{}) do
  #   %Like{}
  #   |> Like.changeset(attrs)
  #   |> Repo.insert()
  # end

  def create_like(user, liked) do
    user = Ecto.build_assoc(user, :likes)
    like = Ecto.build_assoc(liked, :likes, user)
    update_total_likes = liked.__struct__ |> where(id: ^liked.id)

    Ecto.Multi.new()
    |> Ecto.Multi.insert(:like, like)
    |> Ecto.Multi.update_all(:update_total_likes, update_total_likes, inc: [total_likes: 1])
    |> Repo.transaction()
  end


  def unlike(user_id, liked) do
    like = liked?(user_id, liked.id)
    update_total_likes = liked.__struct__ |> where(id: ^liked.id)

    Ecto.Multi.new()
    |> Ecto.Multi.delete(:like, like)
    |> Ecto.Multi.update_all(:update_total_likes, update_total_likes, inc: [total_likes: -1])
    |> Repo.transaction()
  end

  # Returns nil if not found
  defp get_like(user_id, liked) do
    Enum.find(liked.likes, fn l ->
      l.user_id == user_id
    end)
  end

  @doc """
  Updates a like.

  ## Examples

      iex> update_like(like, %{field: new_value})
      {:ok, %Like{}}

      iex> update_like(like, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_like(%Like{} = like, attrs) do
    like
    |> Like.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a like.

  ## Examples

      iex> delete_like(like)
      {:ok, %Like{}}

      iex> delete_like(like)
      {:error, %Ecto.Changeset{}}

  """
  def delete_like(%Like{} = like) do
    Repo.delete(like)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking like changes.

  ## Examples

      iex> change_like(like)
      %Ecto.Changeset{data: %Like{}}

  """
  def change_like(%Like{} = like, attrs \\ %{}) do
    Like.changeset(like, attrs)
  end

  def liked?(user_id, liked_id) do
    Repo.get_by(Like, [user_id: user_id, liked_id: liked_id])
  end
end
