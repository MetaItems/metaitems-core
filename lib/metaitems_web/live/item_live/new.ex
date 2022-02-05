defmodule MetaitemsWeb.ItemLive.New do
  use MetaitemsWeb, :live_view

  alias Metaitems.Items.Item
  alias Metaitems.Context.Items
  alias Metaitems.Uploaders.Item, as: ItemUploader

  @extension_whitelist ~w(.jpg .jpeg .png .webp)

  @impl true
  def render(assigns) do
    Phoenix.View.render(MetaitemsWeb.ItemView, "new.html", assigns)
  end

  @impl true
  def mount(_params, session, socket) do
    socket = assign_defaults(session, socket)

    {:ok,
    socket
    |> assign(page_title: "New NFT Item")
    |> assign(changeset: Items.change_item(%Item{}))
    |> assign(:uploaded_files, [])
    |> allow_upload(:photo_url,
    accept: @extension_whitelist,
    auto_upload: true,
    max_file_size: 30_000_000,
    external: &presign_upload/2)
    }
  end

  @impl true
  def handle_event("validate", %{"item" => item_params}, socket) do
    changeset =
      Items.change_item(%Item{}, item_params)
      |> Map.put(:action, :validate)
    {:noreply, socket |> assign(changeset: changeset)}
  end

  # Need this useless handle_event to make the upload form work :(
  def handle_event("pass", %{"_target" => _photo}, socket) do
    {:noreply, socket}
  end

  def handle_event("cancel-entry", %{"ref" => ref}, socket) do
    {:noreply, cancel_upload(socket, :photo_url, ref)}
  end

  def handle_event("save", %{"item" => item_params}, socket) do
    # item = ItemUploader.put_image_url(socket, %Item{})
    case Items.create_item(%Item{}, item_params, socket.assigns.current_user) do
      {:ok, _item} ->
        # ItemUploader.save(socket)
        {:noreply,
         socket
         |> put_flash(:info, "NFT created successfully")
         |> push_redirect(to: Routes.user_profile_path(socket, :index, socket.assigns.current_user.username))
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)
      }
    end
  end

  defp presign_upload(entry, socket) do
    # link = Phoenix.LiveView.uploaded_entries(socket, :photo_url)
    # errors = for {ref, error} <- socket.assigns.uploads.photo_url.errors, ref == entry.ref, do: error
    fields = %{
      name: "#{entry.uuid}.#{ext(entry)}",
      content_type: entry.client_type
    }

    url = %{uploader: "IPFSUpload", fields: fields}
    {:ok, url, socket}
  end

  defp ext(entry) do
    [ext | _] = MIME.extensions(entry.client_type)
    ext
  end

  def error_to_string(:too_large), do: "Too large"
  def error_to_string(:not_accepted), do: "You have selected an unacceptable file type"
  def error_to_string(:too_many_files), do: "You have selected too many files"
end
