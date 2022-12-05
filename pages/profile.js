import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'


export default function Profile(props) {
  const [profile, setProfile] = useState({userId:"", displayName:"", pictureUrl:""})
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

          // 取得使用者公開資料
          // 後台的「Scopes」要設定開啟 profile, openid
          liff.getProfile()
              .then((profile) => {
                console.log("取得使用者公開資料");
                console.log(profile);
          });

          // 取得使用者類型資料
          let context = liff.getContext();
          console.log("取得使用者類型資料");
          console.log(context);

          // 取得使用者 email
          // 後台的 Email address permission 要是「Applied」
          // LIFF 的設定，Scopes 的「email*」要打勾
          // 使用者在登入時，「電子郵件帳號」也要是「許可」的
          let user = liff.getDecodedIDToken();
          let email = user.email;
          console.log("取得使用者 email");
          console.log(email);
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
      <div>LINE ID: {profile.userId}</div>
      <div>名字: {profile.displayName}</div>
      <div>
        {profile.pictureUrl && <Image
          src={`${profile.pictureUrl}.jpg`}
          alt={profile.displayName}
          width={500}
          height={500}
        />}
      </div>
    </section>
  )
}
