import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <head>
        <title>Fursum</title>
      </head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp
