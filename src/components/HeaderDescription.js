import React from 'react'

function HeaderDescription (props) {
  return (
    <p className={`${props.textSize} open-sans`}>
      {props.text}
    </p>
  )
}

export default HeaderDescription
