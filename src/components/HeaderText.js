import React from 'react'
import HeaderTittle from './HeaderTittle'
import HeaderDescription from './HeaderDescription'

function HeaderText (props) {
  return (
    <div className='header-text'>
      <HeaderTittle
        textSize="is-size-1"
        text="Aprender a Aprender"
      />
      <HeaderDescription
        text="Class Up es una forma diferente de aprender a aprender, usando inteligencia artificial analizamos tu personalidad y te recomendamos las mejores formas de estudiar, administrar tu tiempo para que aprendas mas y mejor."
      />
    </div>

  )
}
export default HeaderText
