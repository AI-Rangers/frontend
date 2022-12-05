import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh-Hant">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script>
        <script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"></script>
      </body>
    </Html>
  )
}
