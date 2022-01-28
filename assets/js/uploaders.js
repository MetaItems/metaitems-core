// import onChange  from "./src/ipfs-uploader/client.js";
import { Buffer } from "buffer";
import {InfuraApiKey, InfuraProjectID} from './config.js'; 

// This is stupid confusing
const INFURA_ID = InfuraProjectID;
const SECRET_KEY = InfuraApiKey;

let Uploaders = {
}
let photo_url;

// Nami Wallet Hooks
Uploaders.IPFSUpload = (entries, onViewError) => {
  entries.forEach(entry => {
    // Create upload session to IP
    let { file, meta: {entrypoint} } = entry
    
    // let upload = onChange(file)
    // const url = await Promise.resolve(onChange(file));
    // console.log(url);

    const formData = new FormData();
    formData.append('photo', file);
    
    
    const url = "https://ipfs.infura.io:5001/api/v0/add?progress=false";
    let xhr = new XMLHttpRequest()
    onViewError(() => xhr.abort())


    xhr.onload = () => {
        if (xhr.status === 200) {
          entry.progress(100);
          // const url = `https://ipfs.infura.io/ipfs/${upload.path}`;
      
          const json = JSON.parse(xhr.responseText); 
          const hash = json['Hash'];
          photo_url = `https://ipfs.infura.io/ipfs/${hash}`;
          
          // display_url();
          window.document.getElementById('item_photo_url').value = photo_url;
          // window.document.querySelector('#statusURL').innerHTML += `<br><div class="mx-auto py-2 bg-green-500 text-gray-200 ">Uploaded ${photo_url}</div>`;
          
          // input.value = input.value + url;
          // console.log("this works??" + value);
          // window.alert(photo_url);

          console.log(url);
        } else {
          entry.error()
        }
    }
    xhr.onerror = () => entry.error()

    xhr.upload.addEventListener("progress", (event) => {
      if(event.lengthComputable){
        let percent = Math.round((event.loaded / event.total) * 100)
        if(percent < 100){ entry.progress(percent) }
      }
    })

    xhr.open("POST", url, true)
    xhr.setRequestHeader("Authorization", "Basic " + btoa(INFURA_ID + ":" + SECRET_KEY));
    // xhr.responseType = 'json';
    xhr.send(formData);
  })
}

export default Uploaders;