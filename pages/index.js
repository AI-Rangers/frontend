import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState, useEffect } from "react";

// export default function Home({ posts }) {
export default function Home(props) {
  // const data = `data = ${posts.message}`
  // console.log(data)
  // console.log(posts)
  let { liff, liffError } = props;

  useEffect(() => {
    console.log("props", props);
  }, []);

  const handleGetProfile = (e, path) => {
    if (path === "/profile") {
      liff.getContext();
      // liff, liffError
      c = liff.getContext();
      p = liff.getProfile();
      console.log("c", c);
      console.log("p", p);
    
        // 取得使用者類型資料
      var context = liff.getContext();
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
      // 開啟連結
      liff.login({
        // 使用者登入後要去到哪個頁面
        redirectUri: 'https://liff.puff.tw/'
      });
    }
  };

  const handleClick = (e, path) => {
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
          Welcome to <a href="https://liff.puff.tw/">食農教育</a>
        </h1>
        <Link href="/" onClick={(e) => handleGetProfile(e, "/profile")}>
          Profile
        </Link>

        <Link href="/" onClick={(e) => handleLineLogin(e, "/login")}>
          LINE登入
        </Link>

        <Link href="/" onClick={(e) => handleClick(e, "/camera")}>
          影像辨識
        </Link>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/next">next</Link>
          </li>
          <li>
            <Link href="/line">line</Link>
          </li>
        </ul>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
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
