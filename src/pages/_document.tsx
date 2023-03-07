import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gray-100 dark:bg-gray-900 text-black dark:text-gray-300'>
        <Navbar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
