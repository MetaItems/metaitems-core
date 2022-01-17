# In this file, we load production configuration and secrets
# from environment variables. You can also hardcode secrets,
# although such is generally not recommended and you have to
# remember to add this file to your .gitignore.
import Config

#### DO NOT USE IN PRODUCTION !!!!!
######## WARNING!!! ###############
####### DO NOT USE #############
# database_url = "ecto://postgres:postgres@db:5432/metaitems_dev"
# database_url = System.get_env("DATABASE_URL") ||
#     raise """
#     environment variable DATABASE_URL is missing.
#     For example: ecto://USER:PASS@HOST/DATABASE
#     """

secret_key_base =
  System.get_env("SECRET_KEY_BASE") ||
    raise """
    environment variable SECRET_KEY_BASE is missing.
    You can generate one by calling: mix phx.gen.secret
    """

config :crypto,
  crypto_key:
    System.get_env("CRYPTO_KEY") ||
      raise("""
      environment variable CRYPTO_KEY is missing.
      You can generate one by calling: mix phx.gen.secret
      """)

config :metaitems, Metaitems.Repo,
  # ssl: true,
  username: System.get_env("PGUSER"),
  password: System.get_env("PGPASSWORD"),
  database: System.get_env("PGDATABASE"),
  show_sensitive_data_on_connection_error: true,
  socket_dir: "/cloudsql/metaitems-static:us-central1:metaitems-db-1",
  pool_size: String.to_integer(System.get_env("POOL_SIZE") || "10")

# hostname: System.get_env("DBPRIVATEIP")
# url: database_url

#### DO NOT USE IN PRODUCTION !!!!!
######## WARNING!!! ###############
####### DO NOT USE #############
# secret_key_base = "HOBTbevZ5owNa48L5rhgA4/tBqAdGs87CmdFHdQyDjXXrDm4+DxjcFPN9Y2aEOqG"

config :metaitems, MetaitemsWeb.Endpoint, secret_key_base: secret_key_base
# http: [port: {:system, "PORT"},
#   # url: [host: "dev.metaitems.tv", port: 443],
#   # url: [host: System.get_env("APP_NAME") <> ".gigalixirapp.com", port: 443]
#
#   # cipher_suite: :strong,
#   # keyfile: "priv/cert/selfsigned_key.pem",
#   # certfile: "priv/cert/selfsigned.pem",
#   # transport_options: [socket_opts: [:inet6]]
# ],

# config :metaitems, MetaitemsWeb.Endpoint,
#   force_ssl: [hsts: true]

# config :ex_aws, :s3,
#   host: System.get_env("SPACE_HOST") || "${SPACE_HOST}",
#   bucket: System.get_env("BUCKET") || "${BUCKET}" || "uploads"

# config :ex_aws,
# access_key_id: System.get_env("SPACE_KEY") || "${SPACE_KEY}",
# secret_access_key: System.get_env("SPACE_SECRET") || "${SPACE_SECRET}"

# ## Using releases (Elixir v1.9+)
#
# If you are doing OTP releases, you need to instruct Phoenix
# to start each relevant endpoint:
#

#
# Then you can assemble a release by calling `mix release`.
# See `mix help release` for more information.

config :metaitems,
  crypto_key: System.get_env("CRYPTO_KEY")
