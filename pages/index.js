import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState, useEffect } from "react";
import Image from 'next/image'

// export default function Home({ posts }) {
export default function Home(props) {
  // const data = `data = ${posts.message}`
  // console.log(data)
  // console.log(posts)
  let { liff, liffError } = props;
  const [islogin, setIslogin] = useState(false);

  useEffect(() => {
    console.log("props", props);
    console.log("islogin", islogin);
    setIslogin(login_status())
  }, []);

  const login_status = async () => {
    try {
      liff?.ready && await liff.ready.then( async () => {
        let isLoggedIn = await liff.isLoggedIn();
        return isLoggedIn;
        // if (liff.isLoggedIn()) {
        // }
      })
    } catch (err) {
      // 發生錯誤
      console.log(err.code, err.message)
      alert(err.message)
    }
  };

  const handleGetProfile = (e, path) => {
    if (path === "/profile") {
      liff.getContext();
      // liff, liffError
      let c = liff.getContext();
      let p = liff.getProfile();
      console.log("c", c);
      console.log("p", p);
    
        // 取得使用者類型資料
      let context = liff.getContext();
      console.log("取得使用者類型資料");
      console.log(context);
    
      // 取得使用者公開資料
      // 後台的「Scopes」要設定開啟 profile, openid
      liff.getProfile()
          .then(function(profile) {
            console.log("取得使用者公開資料");
            console.log(profile);
          });

      // 取得使用者 email
      // 後台的 Email address permission 要是「Applied」
      // LIFF 的設定，Scopes 的「email*」要打勾
      // 使用者在登入時，「電子郵件帳號」也要是「許可」的
      var user = liff.getDecodedIDToken();
      var email = user.email;
      console.log("取得使用者 email");
      console.log(email);
    }
  };


  const handleLineLogin = (e, path) => {
    if (path === "/login") {
      console.log("isLoggedIn", liff.isLoggedIn());
      // liff.isInClient()
      if (!liff.isLoggedIn()) {
        // 開啟連結
        liff.login({
          // 使用者登入後要去到哪個頁面
          redirectUri: 'https://liff.puff.tw/callback'
        });
      }
      setIslogin(login_status())
    }
  };

  const handleLineLogout = (e, path) => {
    if (path === "/logout") {
      if (liff.isLoggedIn()) {
        liff.logout();
      }
    }
  };

  const handleStyle = (e, path) => {
    if (path === "/style") {
    }
  };

  const handleCamera = (e, path) => {
    if (path === "/camera") {
      // 開啟連結
      liff.openWindow({
        // uri：要開啟的網址
        url: `https://liff.puff.tw/${path}`,
        // external：
        // 是否要用外部瀏覽器打開，這在 LINE APP 下開頁面時會比較有感
        // 一般我們在 LINE 上開連結，都會是在 LINE 的框架下，external 設為 true，就可以直接用瀏覽器開啟而不是在 LINE 的框架下開啟
        // 預設值是 false
        external: true
      })
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/">食農教育</a>
        </h1>

        <p className={styles.description}>
           透過體驗，培養相關知識。
        </p>

        {/* <Image
          src="/images/LINE_logo.webp"
          width={200}
          height={200}
          alt="LINE Frontend Framework"
        /> */}

        <div className={styles.grid}>
          {islogin ? (
              <Link href="/" onClick={(e) => handleLineLogin(e, "/login")} className={styles.card}>
              <h3>LINE登入 &rarr;</h3>
              <p>立即註冊</p>
              </Link>
          ) : (
            <Link href="/" onClick={(e) => handleLineLogout(e, "/logout")} className={styles.card}>
            <h3>LINE登出 &rarr;</h3>
            <p>立即註冊</p>
            </Link>
          )}
      


          {/* onClick={(e) => handleGetProfile(e, "/profile")} */}
          <Link href="/profile"  className={styles.card}>
            <h3>用戶資訊 &rarr;</h3>
            <p>顯示相關資訊</p>
          </Link>

          <Link href="/" onClick={(e) => handleCamera(e, "/camera")} className={styles.card}>
            <h3>影像辨識 &rarr;</h3>
            <p>農作物的影像辨識</p>
          </Link>

          <Link href="/" onClick={(e) => handleStyle(e, "/style")} className={styles.card}>
            <h3>影像風格轉換 &rarr;</h3>
            <p>農作物的影像風格轉換</p>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/plant.png" alt="Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

// This function gets called at build time
// export async function getStaticProps(context) {
//   // Call an external API endpoint to get posts
//   // const res = await fetch('https://backend-fxnd3iqy5q-de.a.run.app/')
//   // const posts = await res.json()
//   // 1657706181-1gYzEj7b
//   // /predict/image
//   // /img/{img_name}/style/{selected_style}
//   // /uploadfile/
//   // {
//   //   "message": "Hello world!"
//   // }
//   const posts = {
//     "message": "Hello world!"
//   }
//   // console.log('context', context)
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }
