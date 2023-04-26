import React, { useState } from 'react'
import { functions } from '../store'
import { DocumentTextIcon, XMarkIcon } from '@heroicons/react/24/solid'

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

  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (value: {}) => {
    setDetails(value);
    setShowDetails(false);
    localStorage.setItem('current', JSON.stringify(value));
};


const current = data?.title;

  return (
    <>
    <div className={`fixed md:relative z-30 bg-gray-800 md:bg-transparent h-screen w-screen top-0 left-0 pt-28 md:w-auto md:h-auto flex flex-col space-y-1 md:pt-20 px-5 transition duration-500 ${showDetails ? '-translate-x-0' : '-translate-x-full'} md:-translate-x-0`} >
       <div className="flex justify-between items-center">
       <h1 className='font-bold px-5'>Getting started</h1>
       {showDetails && <XMarkIcon className='w-8 cursor-pointer hover:scale-110 transition' onClick={() => setShowDetails(false)} />}
       </div>
        <div className={`capitalize cursor-pointer w-full rounded-lg px-5 py-2 hover:bg-gray-800 ${current === "getStarted" && "text-blue-500"}`} onClick={() => handleChange({"title": "getStarted"})}>installation</div>
        {
            functions?.map((each, index) => <div key={index} className={`capitalize cursor-pointer  w-full rounded-lg px-5 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 ${current === each?.title && "text-blue-500"}`} onClick={() => handleChange(each)}>{each?.title}</div>)
        }
    </div>

      <DocumentTextIcon className='md:hidden w-10 fixed bg shadow-xl rounded-full bottom-3 right-3 p-2 cursor-pointer  z-50' onClick={() => setShowDetails(true)} />
    </>
  )
}

export default FeaturesBar