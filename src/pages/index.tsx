import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../../components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Php sniper</title>
        <meta name="php sniper" content="a light weight php library that make interaction with database more efficient" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col md:max-w-5xl lg:max-w-7xl mx-auto">
       <Hero />
      </main>
    </>
  )
}
