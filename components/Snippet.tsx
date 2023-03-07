import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useTypewriter } from 'react-simple-typewriter'
import { CheckBadgeIcon, Square2StackIcon } from '@heroicons/react/24/outline'


type Props = {
    code: string
}

const Snippet = ({ code }: Props) => {
    const [copySuccess, setCopySuccess] = useState(false);

    const [text, count] = useTypewriter({
        words: [decodeURIComponent(code)
        ],
        loop: 1,
        delaySpeed: 2000,
        typeSpeed: 30,


    });

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopySuccess(true);
            setTimeout(() => {
                setCopySuccess(false);
            }, 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <div className="relative">
            <div className='absolute w-full p-2 flex justify-end' onClick={handleCopy}>
                                {
                                    copySuccess ? (
                                        <CheckBadgeIcon className="h-6 w-6 text-blue-500 hover:scale-125 focus:scale-125 cursor-pointer transition" />
                                    ) : (
                                        <Square2StackIcon className="h-6 w-6 text-blue-500 hover:scale-125 focus:scale-125 cursor-pointer transition" />
                                    )
                                }
                            </div>
            <SyntaxHighlighter showInlineLineNumbers language="php" style={vscDarkPlus}>
                {text}
            </SyntaxHighlighter>
        </div>
    )
}

export default Snippet