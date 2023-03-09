import React, { useEffect, useState } from 'react'
import FeaturesBar from '../../components/FeaturesBar'
"use client"
import DocsDetails from '../../components/DocsDetails';
import Navbar from '../../components/Navbar';
import Head from 'next/head';

const Docs = () => {

    const [details, setDetails] = useState({})

 
useEffect(() => {
    if (typeof window !== 'undefined') {
        const current = localStorage.getItem('current');
        try {
            const parsedData = JSON.parse(current || "{}");
            setDetails(parsedData);
        } catch (error) {
            // console.log(error);
            setDetails({ "title": "getStarted" });
        }
    }
}, []);


useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(Object.keys(details).length === 0){
        setDetails({ "title": "getStarted" });
    }
  }, [details]);

    return (
        <>
        <Head>
        <title>Php sniper</title>
        <meta name="php sniper" content="a light weight php library that make interaction with database more efficient" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/phpSniper.png" />
      </Head>
        <Navbar />
        <div id='parent' className='min-h-screen flex flex-col md:flex-row md:space-x-16 overflow-y-scroll scroll-smooth md:max-w-5xl lg:max-w-7xl mx-auto px-2'>
            <FeaturesBar setDetails={setDetails} data={details} />
            <div id='container' className="flex flex-1 flex-col space-y-10 pt-20 md:max-h-[100vh] overflow-y-scroll hide-scrollbar scroll-smooth">
                <DocsDetails data={details} />
            </div>
        </div>
        </>
    )
}

export default Docs