import Link from 'next/link';
import React from 'react'
type Props = {
data: {
    name: string;
    url: string;
  }
  onClick: (value: boolean) => void;
}

const NavItem = ({data, onClick}: Props) => {
  return (
    <Link href={data?.url} className='capitalize px-3 py-2 rounded-xl hover:bg-gray-200 hover:dark:bg-gray-800' onClick={() => onClick(false)}>{data?.name}</Link>
  )
}

export default NavItem