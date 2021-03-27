import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WKPBK2DXL8"></script>
        <script dangerouslySetInnerHTML={
          {
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments)}
                  gtag("js", new Date());
                  gtag("config", "G-WKPBK2DXL8");
              `}
        }>
        </script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
