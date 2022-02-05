import NamiWalletApi, { Cardano } from './nami/nami.js';
import {blockfrostApiKey} from 'env'; 

let nami;

// Primitive useState() implementation
const useState = (defaultValue) => {
  let value = defaultValue;
  const getValue = () => value;
  const setValue = newValue => value = newValue;
  return [getValue, setValue];
}

const [connected, setConnected] = useState(false);
const [address, setAddress] = useState("");
const [nfts, setNfts] = useState([]);

// const NamiConnect = () => {
  
  const t = async() => {
    const S = await Cardano();
      nami = new NamiWalletApi(
          S,
          window.cardano,
          blockfrostApiKey
      )

      if (await nami.isInstalled()) {
          await nami.isEnabled().then(result => { setConnected(result) })

      }
  }


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


export { t, connect, getAddress };