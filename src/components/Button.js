import React from 'react'

function Button (props) {
  const styles = ['button']
  if (props.styles) styles.push(props.styles)
  const classNames = styles.join(' ')

  return (
    <a className={classNames}>
      {props.isStrong
        ? (
          <strong>
            {props.text}
          </strong>
        )
        : (
          <span>
            {props.text}
          </span>
        )}
    </a>
  )
}

export default Button
