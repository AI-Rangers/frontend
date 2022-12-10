import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function Camera() {
  // useEffect(async () => {
  // }, [])

  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [styledImage, setStyledImage] = useState({
    file: "",
    folder: "",
    path: ""
  });

  const hasStyledImage = styledImage.path.length  > 0;

  useEffect(() => {
    // console.log('image', image)
    const hasImage = image?.size > 0;
    hasImage && uploadToServer().then( async ( response ) => {
      // console.log("response ", response);
      const result = await styleImg(response.file);
      // console.log('result', result);
      setStyledImage(result);
      // file: "processedImg_香蕉.jpg"
      // folder:"static/styled/"
      // path:"static/styled/processedImg_香蕉.jpg"
    });
  }, [image]);
  
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  
  const uploadToServer = async () => {
    const body = new FormData();
    const url = `https://api.puff.tw/uploadfile/`;
    const field_name = "uploaded_file";
    body.append(field_name, image);
    const response = await fetch(url, {
      method: "POST",
      body: body
    });
    const json = await response.json();
    return json;
    // file: "香蕉.jpg"
    // folder :"static/origin/"
    // path: "static/origin/香蕉.jpg"
  };

  const styleImg = async (img_name) => {
    // console.log("img_name", img_name);

    // const selected_style = "pink_style_1800.t7";
    // const params = {
    //   img_name: img_name,
    //   selected_style: selected_style
    // };
    // const url = new URL(`https://api.puff.tw/img/${img_name}/style/${selected_style}`);

    const params = {
      img_name: img_name
    };
    const url = new URL(`https://api.puff.tw/circlegan/${img_name}`);

    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url, {
      method: "GET"
    });
    const json = await response.json();
    return json;
  };

  return (
    <section style={{ textAlign: 'center' }}>
      <div >
        <div>
          <img 
          style={{ width: '400px', height: '400px' }}
          src={createObjectURL} />
          <h4>請選擇圖片</h4>
          <input type="file" name="myImage" onChange={uploadToClient} />
        </div>
        
        <div>
          <h4>風格轉化</h4>
          {/* {styledImage.file} */}
        </div>
        <div>
          {hasStyledImage && <img 
          style={{ width: '400px', height: '400px' }}
          src={`https://api.puff.tw/${styledImage.path}`} /> }
        </div>
      </div>
    </section>
  );
  
}
