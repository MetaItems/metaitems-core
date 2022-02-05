const fs = require('fs');
const path = require('path');
const { watch } = require('chokidar');
const esbuild = require("esbuild");
const { sassPlugin } = require('esbuild-sass-plugin');
const { wasmLoader } = require("esbuild-plugin-wasm");
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const envFilePlugin = require('esbuild-envfile-plugin');
// import { nodeExternalsPlugin } from "esbuild-node-externals";


// config
const ENTRY_FILE = 'js/app.js';
const OUTPUT_DIR = path.resolve(__dirname, '../priv/static/assets');
const OUTPUT_FILE = 'app.js';
const ENTRY_CSS_FILE = 'css/app.scss';
const OUTPUT_CSS_FILE = 'app.css';
const MODE = process.env['NODE_ENV'] || 'production';
const TARGET = 'esnext'


// build
function build(entryFile, outFile) {
	console.log(`[+] Starting static assets build with esbuild. Build mode ${MODE}...`)
	require('esbuild').build({
		entryPoints: [entryFile],
		outfile: outFile,
		minify: MODE === 'dev' || MODE === 'development' ? false : true, // if dev mode, don't minify
		watch: false,
		bundle: true,
		target: TARGET,
		format: 'esm',
		logLevel: 'silent',
		plugins: [
			sassPlugin({
				async transform(source, resolveDir) {
					const { css } = await postcss(
						autoprefixer,
						tailwindcss(path.resolve(__dirname, "../assets/tailwind.config.cjs"))
					).process(source)
					return css
				}
			}),
			envFilePlugin,
      wasmLoader()
		], // optional
		loader: { // built-in loaders: js, jsx, ts, tsx, css, json, text, base64, dataurl, file, binary
			'.ttf': 'file',
			'.otf': 'file',
			'.svg': 'file',
			'.eot': 'file',
			'.woff': 'file',
			'.woff2': 'file',
			'.wasm': 'file',
		},
		
		define: {
			'process.env.NODE_ENV': MODE === 'dev' || MODE === 'development' ? '"development"' : '"production"',
			'global': 'window'
		},
		sourcemap: MODE === 'dev' || MODE === 'development' ? true : false

	})
		.then(() => { console.log(`[+] Esbuild ${entryFile} to ${outFile} succeeded.`) })
		.catch((e) => {
			console.log('[-] Error building:', e.message);
			process.exit(1)
		})
}



// helpers
function mkDirSync(dir) {
	if (fs.existsSync(dir)) {
		return;
	}

	try {
		fs.mkdirSync(dir);
	} catch (err) {
		if (err.code === 'ENOENT') {
			mkDirSync(path.dirname(dir))
			mkDirSync(dir)
		}
	}
}

// make sure build directory exists
mkDirSync(OUTPUT_DIR);

// build initial
build(path.join(__dirname, ENTRY_FILE), `${OUTPUT_DIR}/${OUTPUT_FILE}`)
// watcher
if (MODE === 'dev' || MODE === 'development') {
	const watcher = watch(['../lib/**/*.*eex*', '../js/*.js*', '../css/**/*.*css*']);
	watcher.on('change', () => {
		build(path.join(__dirname, ENTRY_FILE), `${OUTPUT_DIR}/${OUTPUT_FILE}`);
    build(path.join(__dirname, ENTRY_CSS_FILE), `${OUTPUT_DIR}/${OUTPUT_CSS_FILE}`);
	})
}