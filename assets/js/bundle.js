// import NamiWallet from "./react/src/components/NamiConnect.jsx";
import {t, connect, getAddress } from "./src/index.js";
import onChange  from "./src/ipfs-uploader/client.js";

let Hooks = {
}

// Nami Wallet Hooks
Hooks.NamiConnectWallet = {
  page() { return this.el.dataset.page },
  mounted(){
    // `upload` iterates through all files selected and invokes a helper function called `retrieveNewURL`.
    document.getElementById('nami-connect-wallet').addEventListener('click', function(e) {
      t();   
      // connect()
      // .then(getAddress());
      getAddress();
      

    });
  },
  reconnected(){ this.pending = this.page() },
  updated(){ this.pending = this.page() }
}

export default Hooks