import React from 'react'
import { functions } from '../store'

const FeaturesBar = () => {
  return (
    <div className='flex flex-col space-y-3 md:pt-20'>
        <h1 className='font-bold'>Getting started</h1>
        <div className="capitalize">installation</div>
        {
            functions?.map((each, index) => <div key={index} className="capitalize cursor-pointer">{each?.title}</div>)
        }
    </div>
  )
}

export default FeaturesBar