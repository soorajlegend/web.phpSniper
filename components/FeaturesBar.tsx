import React from 'react'
import { functions } from '../store'

type Props = {
    setDetails: (details:{}) => void,
}

const FeaturesBar = ({setDetails} : Props) => {
  return (
    <div className='flex flex-col space-y-3 md:pt-20'>
        <h1 className='font-bold'>Getting started</h1>
        <div className="capitalize" onClick={() => setDetails({"title": "getStarted"})}>installation</div>
        {
            functions?.map((each, index) => <div key={index} className="capitalize cursor-pointer" onClick={() => setDetails(each)}>{each?.title}</div>)
        }
    </div>
  )
}

export default FeaturesBar