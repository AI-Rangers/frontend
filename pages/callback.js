import { useState, useEffect } from "react";

export default function Callback(props) {
    useEffect(() => {
        // to avoid `window is not defined` error
        // console.log('props', props)
        // console.log('props', props.liff)
        liff.login({
            // 使用者登入後要去到哪個頁面
            redirectUri: 'https://liff.puff.tw/'
        });
    }, []);

    return (null);
}
