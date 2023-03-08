import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Document() {


  return (
    <Html lang="en">
      <Head>
        <title>Php sniper</title>
        <meta name="php sniper" content="a light weight php library that make interaction with database more efficient" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/phpSniper.png" />
      </Head>
      <body className='bg-gray-100 dark:bg-gray-900 text-black dark:text-gray-300 pt-24'>
        <Navbar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
