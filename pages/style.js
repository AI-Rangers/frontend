import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function Style() {
  const [img, setImg] = useState({
    style : "",
    origin_name : "",
    origin_url : "",
    styled_name : "",
    styled_url : ""
  })

  // useEffect(async () => {
  // }, [])

  return (
    <section style={{ textAlign: 'center' }}>
      <Head>
        <title>My Profile</title>
      </Head>
      <h1>原圖</h1>
      <div>Name: {img.origin_name}</div>
      <div>
        {img.origin_url && <Image
          src={img.origin_url}
          alt={img.origin_name}
          width={500}
          height={500}
        />}
      </div>
      <h1>風格轉化圖</h1>
      <div>Name: {img.styled_name}</div>
      <div>
        {img.styled_url && <Image
          src={img.styled_url}
          alt={img.styled_name}
          width={500}
          height={500}
        />}
      </div>
    </section>
  )
}
