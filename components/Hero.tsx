import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Hero = () => {
    const [text, count] = useTypewriter({
        words: [
            "Power Up Your PHP Development",
            "Efficient PHP Database Management",
            "Streamline Your PHP Workflow",
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='w-full h-[80vh] flex items-center'>
        <h1 className='text-5xl md:text-[8em] h-auto lg:text-[10em] bg-gradient-to-tr from-indigo-800 to-cyan-400 capitalize bg-clip-text text-transparent font-black'>
            {text}
            <Cursor cursorColor="#ccc" />
            


        </h1>
    </div>
  )
}

export default Hero