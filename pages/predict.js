import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function Predict() {
  // useEffect(async () => {
  // }, [])

  const [image, setImage] = useState(null);
  const [predict, setPredict] = useState(null);
  
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [styledImage, setStyledImage] = useState({
    file: "",
    folder: "",
    path: ""
  });

  const hasStyledImage = styledImage.path.length  > 0;

  const hasPredict = predict?.length > 0
  
// 'https://api.puff.tw/predict/image'
// 'file=@0bf9a3ba-0b20-4c02-8416-71b521cbde45.jpg;type=image/jpeg'


  useEffect(() => {
    // console.log('image', image)
    const hasImage = image?.size > 0;
    // hasImage && uploadToServer().then( async ( response ) => {
    hasImage && uploadToServer().then( ( response ) => {
      // console.log("response ", response);
      // const result = await styleImg(response.class);
      setPredict(response);
      // setPredict(response[0].class);
      // [
      //   {'class': 'tea', 'confidence': '46.94 %'},
      //   {'class': 'custardapple', 'confidence': '30.80 %'}
      // ]
      // console.log('result', result);
      // setStyledImage(result);
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
    const url = `https://api.puff.tw/predict/image`;
    const field_name = "file";
    body.append(field_name, image);
    const response = await fetch(url, {
      method: "POST",
      body: body
    });
    const json = await response.json();
    return json;
    // {
    //   "class": "sweetpotato"
    // }
  };

  // const styleImg = async (img_name) => {
  //   // console.log("img_name", img_name);
  //   const selected_style = "pink_style_1800.t7";
  //   const params = {
  //     img_name: img_name,
  //     selected_style: selected_style
  //   };
  //   const url = new URL(`https://api.puff.tw/img/${img_name}/style/${selected_style}`);
  //   url.search = new URLSearchParams(params).toString();
  //   const response = await fetch(url, {
  //     method: "GET"
  //   });
  //   const json = await response.json();
  //   return json;
  // };

  return (
    <section style={{ textAlign: 'center' }}>
      <div >
        <div>
          <h4>影像辨識</h4>
          {/* {styledImage.file} */}
        </div>
        <div>
          <h2> 辨識結果為 : </h2>
          <h2 style={{ color: 'red' }}> { hasPredict && predict[0].class } </h2>
          <h2 style={{ color: 'red' }}> { hasPredict && predict[0].confidence } </h2>
        </div>

        <div>
          <img 
          style={{ width: '400px', height: '400px' }}
          src={createObjectURL} />
          <h4>請選擇圖片</h4>
          <input type="file" name="myImage" onChange={uploadToClient} />
        </div>
      </div>
    </section>
  );
  
}
