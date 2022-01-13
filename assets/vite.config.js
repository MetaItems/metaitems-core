import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  const isDev = command !== "build";
  if (isDev) {
    // Terminate the watcher when Phoenix quits
    process.stdin.on("close", () => {
      process.exit(0);
    });

    process.stdin.resume();
  }

  return {
    publicDir: "static",
    // plugins: [react()],
    build: {
      target: "esnext", // build for recent browsers
      outDir: "../priv/static", // emit assets to priv/static
      emptyOutDir: true,
      sourcemap: isDev, // enable source map in dev build
      manifest: false, // do not generate manifest.json
      rollupOptions: {
        input: {
          app: "./js/app.js"
        },
        output: {
          entryFileNames: "assets/[name].js", // remove hash
          chunkFileNames: "assets/[name].js",
          assetFileNames: chunkAssets
        }
      }
    }
  };
});

/*
* Watches and closes stdin when the main process closes.
* This avoids zombie esbuild processes accumulating in the system.
*/
function maybeCloseStdin(command) {
  if (command == "build") return
  process.stdin.on("close", () => { process.exit(0) })
  process.stdin.resume()
}

/*
* Maps asset chunks to their corresponding folder.
* Keys are regexes that match the file name and values should be a asset folder.
* This first match is always used, so make sure to put the most specific regex first.
*/
const assetChunkMappings = {
  "\.webfonts/\.(woff2?|ttf|eot|svg)": "fonts/[name][extname]",
  "\.(woff2?|ttf|eot)$": "fonts/[name][extname]",
  "\.(s?css)$": "assets/[name][extname]",
}

function chunkAssets(info) {
  return Object.entries(assetChunkMappings)
    .filter(([key, _value]) => info.name.match(key))
    .map(([_key, value]) => value)[0] || "[ext]/[name][extname]"
}