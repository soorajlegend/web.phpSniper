import React from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Cursor, useTypewriter } from 'react-simple-typewriter'



type Props = {
code: string
}

const Snippet = ({code}:Props) => {

    const [text, count] = useTypewriter({
        words: [decodeURIComponent(code)
        ],
        loop: 1,
        delaySpeed: 2000,
        typeSpeed: 30,
        
        
    });

  return (
    <SyntaxHighlighter showInlineLineNumbers language="php" style={vscDarkPlus}>
    {text}
</SyntaxHighlighter>
  )
}

export default Snippet