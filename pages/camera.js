import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function Camera() {
  // const [img, setImg] = useState({
  //   style : "",
  //   origin_name : "",
  //   origin_url : "",
  //   styled_name : "",
  //   styled_url : ""
  // })

  // useEffect(async () => {
  // }, [])

  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
  
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  
  const uploadToServer = async (event) => {
    event.preventDefault();
    const body = new FormData();
    const url = `https://api.puff.tw/predict/image`
    body.append("file", image);
    const response = await fetch(url, {
      method: "POST",
      body: body
    });

    console.log('response', response)
  };


  
  return (
    <div>
      <div>
        <img src={createObjectURL} />
        <h4>Select Image</h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button>
      </div>
    </div>
  );
  
}


