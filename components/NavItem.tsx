import React from 'react'
type Props = {
data: {
    name: string;
    url: string;
}
}

const NavItem = ({data}: Props) => {
  return (
    <div className='capitalize'>{data?.name}</div>
  )
}

export default NavItem