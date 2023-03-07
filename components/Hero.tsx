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
    <div className='relative w-full pt-20 px-3 md:pt-0 md:px-0 h-[50vh] md:min-h-screen flex items-center z-0'>
        <h1 className='text-5xl md:text-[8em] h-auto lg:text-[8rem] gradient-text capitalize font-black'>
            {text}
            <Cursor cursorColor="#ccc" />
        </h1>
    </div>
  )
}

export default Hero