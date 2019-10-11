import React from 'react'

function HeaderTittle (props) {
  return (
    <h1 className={`${props.textSize} comfortaa`}>
      {props.text}
    </h1>
  )
}
export default HeaderTittle
