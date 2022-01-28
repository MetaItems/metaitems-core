import { create } from 'ipfs-http-client';
import { Buffer } from "buffer";
import {InfuraApiKey} from '../../config.js'; 

// This is stupid confusing
const INFURA_ID = '24FQGaDR0vciIowz8jKGinh3Zew';
const SECRET_KEY = InfuraApiKey;
const auth = 'Basic ' + Buffer.from(INFURA_ID + ':' + SECRET_KEY).toString('base64')


const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth
  },
  progress: true
})

// const client = create(`https://ipfs.infura.io:5001/${SECRET_KEY}/v0/add`)
const onChange = async(file) => {
  // IPFS add file
  
    try {
      const upload = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${upload.path}`;
      return url;
      
      // console.log(Promise.resolve(upload))

      // async function progress() {
      //   const max = 100;
      //   let current = 1;
      //   while(current != max && !(Promise.resolve(upload))) {
      //     console.log(current++);
      //     await new Promise(res => setTimeout(res, 1000));
      //     console.log(upload);
      //   } 
      // }
      // progress()

      // const max = 100;
      // let current = 1;

      // // console.log(Promise.resolve(upload))
      // const progress = new Array(max).fill(0).map(
      //   () => add(file).then(
      //   () => console.log(current++)));
      // await Promise.all(progress);
        
    } catch (error) {
        console.log('Error uploading file: ', error)
    } 
}

export default onChange;
