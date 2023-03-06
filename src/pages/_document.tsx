import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../../components/Navbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gray-100 dark:bg-neutral-900 text-black dark:text-white'>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
