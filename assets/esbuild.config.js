import esbuild from "esbuild";
import {sassPlugin} from 'esbuild-sass-plugin';
import {wasmLoader} from "esbuild-plugin-wasm";
// import { nodeExternalsPlugin } from "esbuild-node-externals";


const args = process.argv.slice(2)
const watch = args.includes('--watch')
const deploy = args.includes('--deploy')

const loader = {
  // Add loaders for images/fonts/etc, e.g. { '.svg': 'file' }
}


let opts = {
  entryPoints: ['js/app.js'],
  bundle: true,
  target: 'esnext',
  format: 'esm',
  outdir: '../priv/static/assets',
  logLevel: 'info',
  loader,
  plugins: [
    sassPlugin(),
    wasmLoader()
  ]
}

if (watch) {
  opts = {
    ...opts,
    watch,
    sourcemap: 'inline'
  }
}

if (deploy) {
  opts = {
    ...opts,
    minify: true
  }
}

const promise = esbuild.build(opts)

if (watch) {
  promise.then(_result => {
    process.stdin.on('close', () => {
      process.exit(0)
    })

    process.stdin.resume()
  })
}