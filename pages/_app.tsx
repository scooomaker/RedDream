import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="" href="/favicon.ico" />
        <title>红楼梦</title>

      </Head>
      
      
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
