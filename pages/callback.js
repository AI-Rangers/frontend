import { useState, useEffect } from "react";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Router from "next/router";

export default function Callback(props) {
    let { liff, liffError } = props;
    const [islogin, setIslogin] = useState(false);

    useEffect(() => {
        checkLogin();
    }, [islogin]);

    const checkLogin = async () => {
    try {
        console.log('checkLogin');
        liff?.ready && await liff.ready.then( async () => {
            let isLoggedIn = await liff.isLoggedIn();
            const isEqual = isLoggedIn === true;
            setIslogin(isLoggedIn)
            console.log('isEqual', isEqual);
            console.log('isLoggedIn', isLoggedIn);
            // liff.isInClient()
            if (isEqual) {
                // console.log("登入後轉向到首頁");
                // Router.push("/");
            }
        })
        } catch (err) {
        // 發生錯誤
        console.log(err.code, err.message)
        alert(err.message)
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
            <h1 className={styles.title}>
                {islogin && <a href="/">已登入請回首頁</a>}
                <a href="/">已登入請回首頁</a>
            </h1>
            </main>
        </div>
    );
}
