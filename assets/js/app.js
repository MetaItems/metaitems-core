// We import the CSS which is extracted to its own file by esbuild.
// Remove this line if you add a your own CSS build pipeline (e.g postcss).
import "../css/app.scss"


// If you want to use Phoenix channels, run `mix help phx.gen.channel`
// to get started and then uncomment the line below.
// import "./user_socket.js"

// You can include dependencies in two ways.
//
// The simplest option is to put them in assets/vendor and
// import them using relative paths:
//
//     import "../vendor/some-package.js"
//
// Alternatively, you can `npm install some-package --prefix assets` and import
// them using a path starting with the package name:
//
//     import "some-package"
//

// Include phoenix_html to handle method=PUT/DELETE in forms and buttons.
import "phoenix_html"
// Establish Phoenix Socket and LiveView configuration.
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"

// React experiment
// import { define } from 'remount'
// import NamiWallet from "./wallets/nami/index.jsx";
// define({ 'x-application': NamiWallet })
// import Hooks from "./bundle.js"
// import topbar from "../vendor/topbar"


import Alpine from "alpinejs" // Remove soon 
window.Alpine = Alpine;
Alpine.start();

import Hooks from './bundle.js'
import Uploaders  from "./uploaders.js";


let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, {
  hooks: Hooks,
  uploaders: Uploaders,
  params: {_csrf_token: csrfToken},
  dom: {
    onBeforeElUpdated(from, to) {
      if(from.__x_dataStack){window.Alpine.clone(from, to)}
    }
  }
})

// Optionally render the React components on page load as
// well to speed up the initial time to render.
// The pushEvent, pushEventTo and handleEvent props will not be passed here.
// document.addEventListener("DOMContentLoaded", e => {
//   initLiveReact()
// })

// Show progress bar on live navigation and form submits
// topbar.config({barColors: {0: "#29d"}, shadowColor: "rgba(0, 0, 0, .3)"})
// window.addEventListener("phx:page-loading-start", info => topbar.show())
// window.addEventListener("phx:page-loading-stop", info => topbar.hide())

// connect if there are any LiveViews on the page
liveSocket.connect()

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)  // enabled for duration of browser session
// >> liveSocket.disableLatencySim()
window.liveSocket = liveSocket