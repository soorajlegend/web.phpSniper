import React, { useState } from 'react'
import FeaturesBar from '../../components/FeaturesBar'
import { CheckBadgeIcon, Square2StackIcon } from '@heroicons/react/24/outline'
import Snippet from '../../components/Snippet';
import GetStarted from '../../components/GetStarted';

const docs = () => {
  


    return (
        <div className='min-h-screen flex flex-col md:flex-row md:space-x-16 scroll-smooth md:max-w-5xl lg:max-w-7xl mx-auto px-2'>
            <FeaturesBar />
            <div className="flex flex-1 flex-col space-y-10 pt-20 md:max-h-[100vh] overflow-y-scroll hide-scrollbar">
               <GetStarted />
               </div>
        </div>
    )
}

export default docs