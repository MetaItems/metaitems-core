defmodule Metaitems.LikesFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Metaitems.Likes` context.
  """

  @doc """
  Generate a like.
  """
  def like_fixture(attrs \\ %{}) do
    {:ok, like} =
      attrs
      |> Enum.into(%{
        liked_id: 42
      })
      |> Metaitems.Likes.create_like()

    like
  end
end
