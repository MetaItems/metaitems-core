FROM elixir:1.13.1-alpine AS build

# install build dependencies
RUN apk add --no-cache build-base npm git

# prepare build dir
WORKDIR /app

# install hex + rebar
RUN mix local.hex --force && \
    mix local.rebar --force

# set build ENV
ENV MIX_ENV=prod
#ENV MIX_ENV=dev
ENV PORT 8080

EXPOSE ${PORT}


# install mix dependencies && get .env
COPY mix.exs mix.lock ./
COPY config config
RUN mix do deps.get --only $MIX_ENV
RUN mix deps.compile

# build assets
# DEVELOPMENT ONLY
COPY assets/package.json assets/package-lock.json ./assets/
RUN npm --prefix ./assets ci --progress=false --no-audit --loglevel=error
#
COPY priv priv
COPY assets assets

ENV NODE_ENV=production
# Will skip this step for something more efficient
# RUN npm install webpack --prefix ./assets
RUN npm run deploy --prefix ./assets
RUN npm prune --production --prefix ./assets
# RUN npm run deploy --prefix ./assets

RUN mix phx.digest

# DEVELOPMENT ONLY

# compile and build release
COPY lib lib
# uncomment COPY if rel/ exists
# COPY rel rel
RUN mix do compile, release

# prepare release image
FROM alpine:3.13.6 AS app

# Development
# RUN apk add --no-cache openssl ncurses-libs

# Poduction
RUN apk add --update openssl libstdc++ ncurses-libs postgresql-client && \
    rm -rf /var/cache/apk/*

WORKDIR /app

RUN adduser -D -h /app kamisama
RUN chown kamisama:kamisama /app

USER kamisama:kamisama

# COPY --from=build --chown=nobody:nobody /app/_build/dev/rel/nalyst ./
COPY --from=build --chown=kamisama:kamisama /app/_build/prod/rel/nalyst ./

ENV HOME=/app

## COPY entrypoint.sh .
## CMD ["./entrypoint.sh"]
CMD ["bin/nalyst", "start"]
