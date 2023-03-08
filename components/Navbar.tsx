import React, { useState } from 'react';
import { navigations } from '../store';
import NavItem from './NavItem';
import Image from 'next/image';
import { Bars3Icon } from '@heroicons/react/24/outline';



type Props = {
  show: boolean,
  setShow: (value: boolean) => void,
}


const Nav = ({ show, setShow }: Props) => {


  return (
    <div className='glass flex justify-between px-5 py-2 fixed w-full top-0 z-50'>
      <div className="md:max-w-5xl lg:max-w-7xl mx-auto flex w-full justify-between  space-x-20 lg:space-x-40  items-center">
        <Image src="/phpSniper.png" priority width={100} height={100} className='w-16 relative z-50' alt='logo'  />

        <div className='md:w-full flex flex-col md:flex-row w-fulljustify-between text-gray-800 dark:text-gray-200'>
          <Bars3Icon className='w-12 p-2 md:hidden relative z-50 hover:bg-gray-200 hover:dark:bg-gray-800 rounded-xl' onClick={() => setShow(!show)}/>
          
          <div className={`pt-24 px-7 space-y-5 md:pt-0 md:px-0 md:space-y-0 left-0  md:left-auto flex flex-col md:flex-row justify-start md:justify-between h-screen md:h-auto absolute  bg-white dark:bg-gray-900  md:relative w-screen md:w-full z-10 transition duration-500 ${show ? "-translate-x-0" : "-translate-x-full"} md:-translate-x-0`} >
            {navigations?.map((nav, index) => (
              <NavItem data={nav} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Nav show={show} setShow={setShow} />
      {/* rest of the app */}
    </div>
  );
};

export default Navbar;
