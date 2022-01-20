import NamiWalletApi, { Cardano } from './nami-js';
// import blockfrostApiKey from '../config.js'; 
let nami;

export default function App() {
    
  const connect = async () => {
    // Connects nami wallet to current website 
    await nami.enable()
        .then(result => setConnected(result))
        .catch(e => console.log(e))
  }

  const getAddress = async () => {
      // retrieve address of nami wallet
      if (!connected) {
          await connect()
      }
      await nami.getAddress().then((newAddress) => { console.log(newAddress); setAddress(newAddress) })
  }


  const getBalance = async () => {
      if (!connected) {
          await connect()
      }
      await nami.getBalance().then(result => { console.log(result); setNfts(result.assets); setBalance(result.lovelace) })
  }
}