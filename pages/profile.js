import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'


export default function Profile(props) {
  const [profile, setProfile] = useState({displayName:"", pictureUrl:""})
  const { liff, liffError } = props;

  useEffect(() => {
    handleProfile()
    // const liff = (import('@line/liff')).default
  }, [])

  const handleProfile = async () => {
    try {
      // liff.init({ liffId: 'xxxxxxxx-xxxxxxx' })
      // .then(async () => {
      //   if (liff.isLoggedIn()) {
      //     console.log(liff.getProfile());
      //   } else {
      //     liff.login();
      //   }
      // })
      // .catch((err) => {
      //   console.log(err);
      // })
    

      liff?.ready && await liff.ready.then( async () => {
        const profile = await liff.getProfile()
        console.log('liff', liff);
        console.log('isLoggedIn', liff.isLoggedIn());
        if (liff.isLoggedIn()) {
          console.log('profile', profile);
          setProfile(profile)
        }
      });

    } catch (err) {
      // 發生錯誤
      console.log(err.code, err.message)
      alert(err.message)
    }
  };

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
