import React, { useState } from 'react'
import { functions } from '../store'

type Props = {
    setDetails: (details:{}) => void,
    data?: {
      title?: string
      description?: string
      examples?: [
          example?: {
              title?: string
              description?: string
              code?: string
          }
      ]
  }
}

const FeaturesBar = ({setDetails, data} : Props) => {
const handleChange = (value: {}) => {
    setDetails(value);
    localStorage.setItem('current', JSON.stringify(value));
};


const current = data?.title;

  return (
    <div className='flex flex-col space-y-1 md:pt-20 px-5'>
        <h1 className='font-bold px-5'>Getting started</h1>
        <div className={`capitalize cursor-pointer w-full rounded-lg px-5 py-2 hover:bg-gray-800 ${current === "getStarted" && "text-blue-500"}`} onClick={() => handleChange({"title": "getStarted"})}>installation</div>
        {
            functions?.map((each, index) => <div key={index} className={`capitalize cursor-pointer  w-full rounded-lg px-5 py-2 hover:bg-gray-800 ${current === each?.title && "text-blue-500"}`} onClick={() => handleChange(each)}>{each?.title}</div>)
        }
    </div>
  )
}

export default FeaturesBar