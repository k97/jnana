import { AppProps } from 'next/app';
import '../scss/index.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
