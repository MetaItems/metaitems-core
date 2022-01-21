import NamiWallet from "./wallets/nami/index.js";

let Hooks = {}

// Nami Wallet Hooks
Hooks.NamiConnectWallet = {
  page() { return this.el.dataset.page },
  mounted(){
    // `upload` iterates through all files selected and invokes a helper function called `retrieveNewURL`.
    document.getElementById('nami-connect-wallet').addEventListener('click', function(e) {
      console.log("I work");    
      NamiWallet.connect();
    });
  },
  reconnected(){ this.pending = this.page() },
  updated(){ this.pending = this.page() }
}

export default Hooks