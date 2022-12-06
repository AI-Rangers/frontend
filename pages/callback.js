import { useState, useEffect } from "react";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Router from "next/router";

export default function Callback(props) {
    let { liff, liffError } = props;

    useEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = async () => {
    try {
        console.log('checkLogin');
        liff?.ready && await liff.ready.then( async () => {
            let isLoggedIn = await liff.isLoggedIn();
            const isEqual = isLoggedIn === true;
            console.log('isLoggedIn', isLoggedIn);
            // liff.isInClient()
            if (isEqual) {
                console.log("登入後轉向到首頁");
                Router.push("/");
            }
        })
        } catch (err) {
        // 發生錯誤
        console.log(err.code, err.message)
        alert(err.message)
        }
    }

    return (null);
}
