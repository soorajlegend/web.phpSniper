import Head from 'next/head'
import Hero from '../../components/Hero'
import Introduction from '../../components/Introduction'


export default function Home() {
  return (
    <>
      <Head>
        <title>Php sniper</title>
        <meta name="php sniper" content="a light weight php library that make interaction with database more efficient" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/phpSniper.png" />
      </Head>
      <main className="flex flex-col md:max-w-5xl lg:max-w-7xl mx-auto">
       <Hero />
       <Introduction />
      </main>
    </>
  )
}
