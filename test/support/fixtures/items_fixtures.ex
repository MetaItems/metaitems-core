defmodule Metaitems.ItemsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Metaitems.Items` context.
  """

  @doc """
  Generate a item.
  """
  def item_fixture(attrs \\ %{}) do
    {:ok, item} =
      attrs
      |> Enum.into(%{
        description: "some description",
        name: "some name",
        photo_url: "some photo_url",
        price: "120.5",
        quantity: 42,
        review_score: 42,
        royalties: "120.5",
        total_comments: 42,
        total_likes: 42,
        total_reviews: 42,
        type: "some type",
        unlock_content: "some unlock_content",
        url_id: "some url_id"
      })
      |> Metaitems.Items.create_item()

    item
  end
end
