import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';

import { ChakraProvider } from "@chakra-ui/react"
import theme from '../themes/index'

import 'react-medium-image-zoom/dist/styles.css'
import '../scss/index.scss'



export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
