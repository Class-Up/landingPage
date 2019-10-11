import React from 'react'
import HeaderImage from '../components/HeaderImage'
import HeaderButton from '../components/HeaderButton'
import HeaderText from '../components/HeaderText'

function Header (props) {
  return (
    <div className='container'>
      <div className='columns'>
        <div className='column is-7'>
          <HeaderText />
          <HeaderButton
            text="Registrate Ahora"
          />
        </div>
        <div className='column is-5'>
          <HeaderImage />
        </div>
      </div>
    </div>
  )
}

export default Header
