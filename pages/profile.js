import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'


export default function Profile(props) {
  const [profile, setProfile] = useState({displayName:"", pictureUrl:""})
  const { liff, liffError } = props;

  useEffect(() => {
    // const liff = (import('@line/liff')).default
    try {
      liff?.ready && liff.ready.then(() => {
        console.log('liff', liff);
        console.log('isLoggedIn', liff.isLoggedIn());
        if (liff.isLoggedIn()) {
          // const profile = await liff.getProfile()
          const profile = liff.getProfile()
          console.log('profile', profile);
            setProfile(profile)
        }
      });
    } catch (err) {
      // 發生錯誤
      console.log(err.code, err.message)
      alert(err.message)
    }
  
  }, [liff])

  // const handleStyle = async (e, path) => {
  //   if (path === "/style") {
  //   }
  // };

  async function sendMessage () {
    try {
      await liff.ready // 確保 init 必須執行完畢
      // 從這裡開始使用 liff 的 API
      if (!liff.isInClient()) throw new Error('liff.isInClient() = false')
      const contextType = (liff.getContext() || {}).type
      const notInChat = ~['utou', 'room', 'group'].indexOf(contextType)
      if (notInChat) throw new Error(`liff.getContext().type = ${contextType}`)
      await liff.sendMessages([{
        type: 'text',
        text: 'Hello world'
      }])
    } catch (err) {
      // 發生錯誤
      console.log(err.code, err.message)
      alert(err.message)
    }
  }
  
  return (
    <section>
      <Head>
        <title>My Profile</title>
      </Head>
      <h1>Profile</h1>
      <div>
        {profile.pictureUrl && <Image
          src={profile.pictureUrl}
          alt={profile.displayName}
          width={500}
          height={500}
        />}
        <div>Name: {profile.displayName}</div>
      </div>
    </section>
  )
}
