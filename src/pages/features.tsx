import Link from 'next/link'
import React from 'react'
import { ourFeatures } from "../../store"
import Navbar from '../../components/Navbar'
import Head from 'next/head'

const features = () => {

    return (
        <>
        <Head>
        <title>Php sniper</title>
        <meta name="php sniper" content="a light weight php library that make interaction with database more efficient" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/phpSniper.png" />
      </Head>
        <Navbar />
            <div className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">explore our <br /> awesome <Link href="/docs" className="underline decoration-blue-500">features</Link></h1>

                    <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                        Are you a php developer? <br />  We guess you can&apos;t afford to miss this life changing library
                    </p>
                    <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                        Are you not a php developer? <br /> We guess you you can just dive in to php development right after reading the following awesome features
                    </p>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">

                        {
                            ourFeatures?.map((feature, index) => (
                                    <div key={index} className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl flex flex-col justify-between">
                                        <Link href="/docs" className="inline-block text-blue-500 dark:text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                            </svg>
                                        </Link>

                                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{feature?.title}</h1>

                                        <p className="text-gray-500 dark:text-gray-300 flex-1">{feature?.description}</p>

                                      <div>
                                      <Link href="docs" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </Link>
                                      </div>
                                    </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default features