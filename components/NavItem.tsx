import Link from 'next/link';
import React from 'react'
type Props = {
data: {
    name: string;
    url: string;
}
}

const NavItem = ({data}: Props) => {
  return (
    <Link href={data?.url} className='capitalize '>{data?.name}</Link>
  )
}

export default NavItem