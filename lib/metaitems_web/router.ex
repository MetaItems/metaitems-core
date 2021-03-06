defmodule MetaitemsWeb.Router do
  use MetaitemsWeb, :router

  import MetaitemsWeb.UserAuth

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {MetaitemsWeb.LayoutView, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :fetch_current_user
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", MetaitemsWeb do
    pipe_through :browser

    # get "/", PageController, :index
    live "/", ItemLive.Index, :index
    live "/:username", UserLive.Profile, :index
    live "/i/coming_soon", PageLive.ComingSoon, :index
    # get "/i/coming_soon", PageController, :soon
  end

  # Other scopes may use custom stacks.
  # scope "/api", MetaitemsWeb do
  #   pipe_through :api
  # end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: MetaitemsWeb.Telemetry
    end
  end

  # Enables the Swoosh mailbox preview in development.
  #
  # Note that preview only shows emails that were sent by the same
  # node running the Phoenix server.
  if Mix.env() == :dev do
    scope "/dev" do
      pipe_through :browser

      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end

  ## Authentication routes

  scope "/", MetaitemsWeb do
    pipe_through [:browser, :redirect_if_user_is_authenticated]

    # live "/users/register", UserLive.RegistrationComponent, :create
    get "/users/register", UserRegistrationController, :new
    post "/users/register", UserRegistrationController, :create


    get "/users/login", UserSessionController, :new
    post "/users/login", UserSessionController, :create
    get "/users/reset_password", UserResetPasswordController, :new
    post "/users/reset_password", UserResetPasswordController, :create
    get "/users/reset_password/:token", UserResetPasswordController, :edit
    put "/users/reset_password/:token", UserResetPasswordController, :update
  end

  scope "/", MetaitemsWeb do
    pipe_through [:browser, :require_authenticated_user]

    # get "/users/settings", UserSettingsController, :edit
    # put "/users/settings", UserSettingsController, :update
    get "/users/settings/confirm_email/:token", UserSettingsController, :confirm_email

    live "/accounts/edit", UserLive.Settings
    live "/accounts/password/change", UserLive.PassSettings
    live "/:username/following", UserLive.Profile, :following
    live "/:username/followers", UserLive.Profile, :followers

    live "/i/new", ItemLive.New, :new

    # Admin Only for now
    live "/accounts/wallet/edit", WalletLive.WalletSettings
    live "/accounts/notsosecureplace/import_nfts", AdminLive.PolicyImport
  end

  scope "/", MetaitemsWeb do
    pipe_through [:browser]

    delete "/users/log_out", UserSessionController, :delete
    get "/users/confirm", UserConfirmationController, :new
    post "/users/confirm", UserConfirmationController, :create
    get "/users/confirm/:token", UserConfirmationController, :edit
    post "/users/confirm/:token", UserConfirmationController, :update

    # Getting some crazy bug
    live "/i/:id", ItemLive.Show
  end
end
