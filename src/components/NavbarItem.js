import React from 'react'

function NavbarItem (props) {
  return (
    <a className='navbar-item' href={props.to}>
      {props.children}
    </a>)
}

export default NavbarItem
