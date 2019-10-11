
import React, { useState } from 'react'

import Button from './Button'
import Buttons from './Buttons'
import NavbarItem from './NavbarItem'
import NavbarEnd from './NavbarEnd'

function Navbar (props) {
  return (
    <nav className='navbar container' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <NavbarItem to='/'>
          <img src='https://class-up-bucket.s3.amazonaws.com/images/logo/class_up-logo-2.png' width='112' height='28' alt='Class Up Logo' />
        </NavbarItem>

        <a role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </a>
      </div>

      <div id='navbar' className='navbar-menu'>
        <NavbarEnd>
          <NavbarItem to='/students'>
            Student
          </NavbarItem>
          <NavbarItem to='/teaches'>
            Teacher
          </NavbarItem>
          <NavbarItem to='/institutions'>
            Institution
          </NavbarItem>
          <NavbarItem>
            <Buttons>
              <Button
                isStrong
                text='Sign Up'
                styles='is-danger'
              />
              <Button
                text='Log In'
                styles='is-light'
              />
            </Buttons>
          </NavbarItem>
        </NavbarEnd>
      </div>
    </nav>
  )
}

export default Navbar
