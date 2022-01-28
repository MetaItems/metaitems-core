defmodule Metaitems.ItemsTest do
  use Metaitems.DataCase

  alias Metaitems.Items

  describe "items" do
    alias Metaitems.Items.Item

    import Metaitems.ItemsFixtures

    @invalid_attrs %{description: nil, name: nil, photo_url: nil, price: nil, quantity: nil, review_score: nil, royalties: nil, total_comments: nil, total_likes: nil, total_reviews: nil, type: nil, unlock_content: nil, url_id: nil}

    test "list_items/0 returns all items" do
      item = item_fixture()
      assert Items.list_items() == [item]
    end

    test "get_item!/1 returns the item with given id" do
      item = item_fixture()
      assert Items.get_item!(item.id) == item
    end

    test "create_item/1 with valid data creates a item" do
      valid_attrs = %{description: "some description", name: "some name", photo_url: "some photo_url", price: "120.5", quantity: 42, review_score: 42, royalties: "120.5", total_comments: 42, total_likes: 42, total_reviews: 42, type: "some type", unlock_content: "some unlock_content", url_id: "some url_id"}

      assert {:ok, %Item{} = item} = Items.create_item(valid_attrs)
      assert item.description == "some description"
      assert item.name == "some name"
      assert item.photo_url == "some photo_url"
      assert item.price == Decimal.new("120.5")
      assert item.quantity == 42
      assert item.review_score == 42
      assert item.royalties == Decimal.new("120.5")
      assert item.total_comments == 42
      assert item.total_likes == 42
      assert item.total_reviews == 42
      assert item.type == "some type"
      assert item.unlock_content == "some unlock_content"
      assert item.url_id == "some url_id"
    end

    test "create_item/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Items.create_item(@invalid_attrs)
    end

    test "update_item/2 with valid data updates the item" do
      item = item_fixture()
      update_attrs = %{description: "some updated description", name: "some updated name", photo_url: "some updated photo_url", price: "456.7", quantity: 43, review_score: 43, royalties: "456.7", total_comments: 43, total_likes: 43, total_reviews: 43, type: "some updated type", unlock_content: "some updated unlock_content", url_id: "some updated url_id"}

      assert {:ok, %Item{} = item} = Items.update_item(item, update_attrs)
      assert item.description == "some updated description"
      assert item.name == "some updated name"
      assert item.photo_url == "some updated photo_url"
      assert item.price == Decimal.new("456.7")
      assert item.quantity == 43
      assert item.review_score == 43
      assert item.royalties == Decimal.new("456.7")
      assert item.total_comments == 43
      assert item.total_likes == 43
      assert item.total_reviews == 43
      assert item.type == "some updated type"
      assert item.unlock_content == "some updated unlock_content"
      assert item.url_id == "some updated url_id"
    end

    test "update_item/2 with invalid data returns error changeset" do
      item = item_fixture()
      assert {:error, %Ecto.Changeset{}} = Items.update_item(item, @invalid_attrs)
      assert item == Items.get_item!(item.id)
    end

    test "delete_item/1 deletes the item" do
      item = item_fixture()
      assert {:ok, %Item{}} = Items.delete_item(item)
      assert_raise Ecto.NoResultsError, fn -> Items.get_item!(item.id) end
    end

    test "change_item/1 returns a item changeset" do
      item = item_fixture()
      assert %Ecto.Changeset{} = Items.change_item(item)
    end
  end
end
