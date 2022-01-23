import { resolve } from 'path'
import { defineConfig } from "vite";
import {wasmLoader} from "esbuild-plugin-wasm";
import react from '@vitejs/plugin-react'
// import ViteRsw from 'vite-plugin-rsw';


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
    plugins: [
      react({
        jsxRuntime: 'classic'
      }
    )],
    build: {
      target: "esnext", // build for recent browsers
      outDir: "../priv/static", // emit assets to priv/static
      emptyOutDir: true,
      sourcemap: isDev, // enable source map in dev build
      manifest: false, // do not generate manifest.json
      rollupOptions: {
        input: {
          app: "./js/app.js",
        },
        output: {
          entryFileNames: "assets/[name].js", // remove hash
          chunkFileNames: "assets/[name].js",
          assetFileNames: chunkAssets
        }
      },
      plugins: [
        wasmLoader()
      ]
      // Force deps include
      // optimizeDeps: {
      //   include: [
      //     '@emurgo/cardano-serialization-lib-browser/cardano_setialization_lib_bg.wasm',
      //     '@emurgo/cardano-serialization-lib-browser/cardano_setialization_lib_bg.js'
      //   ],
      // },
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

