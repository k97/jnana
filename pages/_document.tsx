import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from "@chakra-ui/react"

import theme from "../themes/index"
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
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
