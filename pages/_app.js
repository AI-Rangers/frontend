import '../styles/globals.css'
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [liffObject, setLiffObject] = useState(null);
  const [liffError, setLiffError] = useState(null);

  // const LIFF_ID = process.env.LIFF_ID
  const LIFF_ID = process.env.NEXT_PUBLIC_LIFF_ID

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    // to avoid `window is not defined` error
    import("@line/liff").then((liff) => {
      console.log("start liff.init()...");

      liff
        .init({ liffId: LIFF_ID })
        .then(() => {
          console.log("liff.init() done");
          console.log("LIFF_ID = ", LIFF_ID);
          setLiffObject(liff);
        })
        .catch((error) => {
          console.log(`liff.init() failed: ${error}`);
          if (!LIFF_ID) {
            console.info(
              "LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable."
            );
          }
          setLiffError(error.toString());
        });
    });
  }, []);

  // Provide `liff` object and `liffError` object
  // to page component as property
  pageProps.liff = liffObject;
  pageProps.liffError = liffError;

  return <Component {...pageProps} />
}

export default MyApp
