import React, { useEffect, useState } from 'react';
import { navigations } from '../store';
import NavItem from './NavItem';
import Image from 'next/image';
import { Bars3Icon } from '@heroicons/react/24/outline';



const Navbar = () => {
  const [show, setShow] = useState(false);


  return (
    <div className='glass flex flex-col justify-between px-5 fixed w-screen top-0 z-50'>
      <div className="md:max-w-5xl lg:max-w-7xl mx-auto py-2 flex w-full justify-between  space-x-20 lg:space-x-40  items-center">
        <Image src="/phpSniper.png" priority width={100} height={100} className='w-16 relative' alt='logo'  />

        <div className='relative overflow-visible md:w-full flex flex-col md:flex-row w-fulljustify-between text-gray-800 dark:text-gray-200'>
          <Bars3Icon className='w-12 p-2 md:hidden relative hover:bg-gray-200 hover:dark:bg-gray-800 rounded-xl cursor-pointer' onClick={() => setShow(!show)}/>
          
          <div className="hidden md:flex justify-between w-full z-10 duration-500 " >
            {navigations?.map((nav, index) => (
              <NavItem data={nav} key={index} onClick={setShow} />
            ))}
          </div>
      </div>
        </div>
          <div className={`left-0 flex md:hidden  h-screen justify-start absolute  z-10 transition duration-500 ${show ? "-translate-x-0" : "-translate-x-full"} md:-translate-x-0`} >
            <div className="bg-white dark:bg-gray-900 flex flex-col justify-start w-[80vw] px-5 pt-20 space-y-5">

            {navigations?.map((nav, index) => (
              <NavItem data={nav} key={index} onClick={setShow} />
              ))}
              </div>
            <div className=" w-[20vw]" onClick={() => setShow(false)} />
          </div>
    </div>
  )
};

export default Navbar;
