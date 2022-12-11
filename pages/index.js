import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText, CardGroup,
  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// export default function Home({ posts }) {
export default function Home(props) {
  // const data = `data = ${posts.message}`
  // console.log(data)
  // console.log(posts)
  let { liff, liffError } = props;
  const [islogin, setIslogin] = useState(false);

  // const isMobile = typeof window !== "undefined" && window.innerWidth <= 766

  useEffect(() => {
    console.log("props", props);
    console.log("islogin", islogin);
    login_status();

    // const hasLogin = liff?.isLoggedIn();
    // hasLogin && uploadToServer().then( async ( response ) => {
    //   // console.log("response ", response);
    //   const result = await styleImg(response.file);
    //   // console.log('result', result);
    //   setStyledImage(result);
    // });
  }, [islogin]);

  const login_status = async () => {
    try {
      console.log('login_status');
      liff?.ready && await liff.ready.then( async () => {
        const isLoggedIn = await liff.isLoggedIn();
        const notEqual = isLoggedIn !== islogin;
        console.log('notEqual', notEqual);
        console.log('isLoggedIn', isLoggedIn);
        if (notEqual) {
          setIslogin(isLoggedIn);
          console.log('setIslogin', isLoggedIn);
        }
        return isLoggedIn;
      })
    } catch (err) {
      // 發生錯誤
      console.log(err.code, err.message)
      alert(err.message)
    }
  };

  const lineLogin = async () => {
    try {
      console.log('lineLogin');
      liff?.ready && await liff.ready.then( async () => {
        let isLoggedIn = await liff.isLoggedIn();
        const notEqual = isLoggedIn !== true;
        console.log('isLoggedIn', isLoggedIn);
        console.log('islogin', islogin);
        console.log('notEqual', notEqual);
        // liff.isInClient()
        if (notEqual) {
          // 開啟連結
          await liff.login({
            // 使用者登入後要去到哪個頁面
            redirectUri: 'https://liff.puff.tw/callback'
            // redirectUri: 'https://9a35-118-150-160-200.jp.ngrok.io/callback'
          // }).then( async (res) => {
          //     isLoggedIn = await liff.isLoggedIn();
          //     console.log("取得登入資料", res);
          //     setIslogin(isLoggedIn);
          //     console.log('setIslogin', isLoggedIn);
          });
        }
        login_status();
        return isLoggedIn;
      })
    } catch (err) {
      // 發生錯誤
      console.log(err.code, err.message)
      alert(err.message)
    }
  };

  const lineLogout = async () => {
    try {
      console.log('lineLogout');
      liff?.ready && await liff.ready.then( async () => {
        let isLoggedIn = await liff.isLoggedIn();
        const notEqual = isLoggedIn !== false;
        // liff.isInClient()
        if (notEqual) {
          // 開啟連結
          liff.logout();
          // .then( async (res) => {
          //     isLoggedIn = await liff.isLoggedIn();
          //     console.log("取得登出資料", res);
          //     setIslogin(isLoggedIn);
          //     console.log('setIslogin', isLoggedIn);
          // });
        }
        login_status();
        return isLoggedIn;
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
      console.log('handleLineLogin');
      lineLogin();
      // console.log("isLoggedIn", liff.isLoggedIn());
      // // liff.isInClient()
      // if (!liff.isLoggedIn()) {
      //   // 開啟連結
      //   liff.login({
      //     // 使用者登入後要去到哪個頁面
      //     redirectUri: 'https://liff.puff.tw/callback'
      //   });
      //   login_status();
      //   // setIslogin()
      // }
    }
  };

  const handleLineLogout = (e, path) => {
    if (path === "/logout") {
      console.log('handleLineLogout');
      lineLogout();
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


  // function createMarkup() {
  //   return {__html: `
  //     <div class='tableauPlaceholder' id='viz1670281792143' style='position: relative'>
  //       <noscript>
  //         <a href='#'>
  //         <img alt='儀表板窗格 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;cr&#47;crop_16701370109140&#47;1_1&#47;1_rss.png' style='border: none' /></a>
  //       </noscript>
  //       <object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
  //         <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='crop_16701370109140&#47;1_1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;cr&#47;crop_16701370109140&#47;1_1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='zh-TW' />
  //       </object>
  //     </div>
  //   `};
  // }
  
  // function TableauPlaceholder() {
  //   return <div style={{ width: '100%' }}  dangerouslySetInnerHTML={createMarkup()} />;
  // }
  

  return (
    <>
    <div className={styles.bg}>
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <header id="header">
        <div class="logo">
          <span class="icon fa-gem"></span>
        </div>
        <div class="content">
          <div class="inner">
            <h1>Dimension</h1>
            <p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
            for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#intro">Intro</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>

            
          </ul>
        </nav>
      </header> */}


{/* <CardGroup>
  <Card
    style={{
      width: '18rem'
    }}
  >
    <img
      alt="Sample"
      src="https://picsum.photos/300/200"
    />
    <CardBody>
      <CardTitle tag="h5">
        影像辨識
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        農作物的影像辨識
      </CardSubtitle>
      <CardText>
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>

  <Card
    style={{
      width: '18rem'
    }}
  >
    <img
      alt="Sample"
      src="https://picsum.photos/300/200"
    />
    <CardBody>
      <CardTitle tag="h5">
      影像辨識
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        農作物的影像辨識
      </CardSubtitle>
      <CardText>
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>

  <Card
    style={{
      width: '18rem'
    }}
  >
    <img
      alt="Sample"
      src="https://picsum.photos/300/200"
    />
    <CardBody>
      <CardTitle tag="h5">
      Tableau 報表
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        相關數據分析
      </CardSubtitle>
      <CardText>
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
</CardGroup> */}



      <main className={styles.main}>

          {islogin ? (
            <Link href="/" onClick={(e) => handleLineLogout(e, "/logout")} className={styles.card}>
            {/* <h3>LINE登出 &rarr;</h3>
            <p>立即註冊</p> */}
            <Image
              src="/images/line_on.png"
              width={50}
              height={50}
              alt="LINE Frontend Framework"
            />
            </Link>
          ) : (
            <Link href="/" onClick={(e) => handleLineLogin(e, "/login")} className={styles.card}>
            {/* <h3>LINE登入 &rarr;</h3>
            <p>立即註冊</p> */}
            <Image
              src="/images/line_off.png"
              width={50}
              height={50}
              alt="LINE Frontend Framework"
            />
            </Link>
          )}

        <h1 className={styles.title}>
          食農教育
        </h1>

        <p className={styles.description}>
           透過體驗，培養相關知識。
        </p>
        <hr style={{
          width: "100%",
          borderColor: "white",
          borderWidth: "5px"
        }}/>


        <div className={styles.grid}>
          {/* onClick={(e) => handleGetProfile(e, "/profile")} */}
          {/* <Link href="/profile"  className={styles.card}>
            <h3>用戶資訊 &rarr;</h3>
            <p>顯示相關資訊</p>
          </Link> */}

          {/* <Link href="/" onClick={(e) => handleCamera(e, "/camera")} className={styles.card}> */}
          <Link href="/predict" className={styles.card}>
            <Image
              src="/images/picture.png"
              width={50}
              height={50}
              alt="picture"
            />
            <h3>影像辨識</h3>
            <p>相關農作物</p>
          </Link>

          {/* <Link href="/style" onClick={(e) => handleStyle(e, "/style")} className={styles.card}> */}
          {/* <Link href="/style" className={styles.card}>
            <h3>影像風格轉換 &rarr;</h3>
            <p>農作物的影像風格轉換</p>
          </Link> */}

          <Link href="/tableaupage" className={styles.card}>
            <Image
              src="/images/shoppingcart.png"
              width={50}
              height={50}
              alt="shopping cart"
            />
            <h3>農產品購物</h3>
            <p>兌換購物金</p>
            {/* <tableau-viz id="tableauViz"
              src='https://public.tableau.com/views/Superstore_24/Overview'
              // src='https://public.tableau.com/views/crop_16701370109140/Overview'
              device="desktop" toolbar="bottom" hide-tabs width="800" height="600">
            </tableau-viz> */}
            {/* <TableauPlaceholder /> */}
          </Link>

        </div>
        {/* <Link href="/tableau/index.html#elements" className={styles.card}> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/plant.png" alt="Logo" className={styles.logo} />
        </a>
      </footer> */}

    </div>
    </div>
  {/* <script src="/script.js" strategy="afterInteractive" /> */}
  </>)
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
