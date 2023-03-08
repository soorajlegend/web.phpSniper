import React, { useEffect, useState } from 'react'
import FeaturesBar from '../../components/FeaturesBar'
import DocsDetails from '../../components/DocsDetails';
import { strict } from 'assert';

const Docs = () => {

    const [details, setDetails] = useState({})

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const current = localStorage.getItem('current');
            if (current === "{}") {
                setDetails({ "title": "getStarted" });
            } else {
                setDetails(JSON.parse(current || ""));
            }
            return;
        }

    }, [])


    return (
        <div className='min-h-screen flex flex-col md:flex-row md:space-x-16 scroll-smooth md:max-w-5xl lg:max-w-7xl mx-auto px-2'>
            <FeaturesBar setDetails={setDetails} data={details} />
            <div className="flex flex-1 flex-col space-y-10 pt-20 md:max-h-[100vh] overflow-y-scroll hide-scrollbar">
                <DocsDetails data={details} />
            </div>
        </div>
    )
}

export default Docs