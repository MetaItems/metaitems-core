// import NamiWallet from "./react/src/components/NamiConnect.jsx";
import {t, connect, getAddress } from "./src/index.js";
import onChange  from "./src/ipfs-uploader/client.js";

let Hooks = {
}

Hooks.ProfileItemsScroll = {
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry.isIntersecting) {  
        this.pushEvent("load-more-profile-items");
      }
    });

    this.observer.observe(this.el);
  },
  destroyed() {
    this.observer.disconnect();
  },
}

// Nami Wallet Hooks
Hooks.NamiConnectWallet = {
  page() { return this.el.dataset.page },
  mounted(){
    // `upload` iterates through all files selected and invokes a helper function called `retrieveNewURL`.
    document.getElementById('nami-connect-wallet').addEventListener('click', function(e) {
      // t();  
      // let cardano = window.cardano.isEnabled() 
      console.log(cardano);
      // connect()
      // .then(getAddress());
      // const address = getAddress()
      // let event = new CustomEvent('get-address', {
      //   detail: {
      //     address: address
      //   }
      // });
      // this.el.dispatchEvent(event);
    });
  },
  reconnected(){ this.pending = this.page() },
  updated(){ 

    this.pending = this.page() 
   
  }
}

export default Hooks