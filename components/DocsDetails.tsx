import React, { useEffect } from 'react'
import GetStarted from './GetStarted'
import Snippet from './Snippet'

type Props = {
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

const DocsDetails = ({ data }: Props) => {

    if (data?.title === 'getStarted') {
        return <GetStarted />
    }

    return (
        <div className='md:px-10 space-y-5 py-10'>
            <h1 className='text-2xl font-bold gradient-text capitalize'>
                {data?.title}
            </h1>
            <div className='space-y-5' dangerouslySetInnerHTML={{ __html: data?.description || "" }}></div>

            {
                data?.examples?.map((example, index) => (
                    <div key={index} className="flex flex-col space-y-3 p-5 shadow-xl rounded-xl w-auto max-w-5xl dark:bg-gray-800">
                        <h2 className='text-xl font-semibold'>{example?.title}</h2>
                        <p>{example?.description}</p>
                        <Snippet code={example?.code || ""} ready={true} />
                    </div>
                ))
            }

        </div>
    )
}

export default DocsDetails
