import Head from 'next/head'
import Hero from '../../components/Hero'
import Introduction from '../../components/Introduction'


export default function Home() {
  return (
    <>
     
      <main className="flex flex-col md:max-w-5xl lg:max-w-7xl mx-auto ">
       <Hero />
       <Introduction />
      </main>
    </>
  )
}
