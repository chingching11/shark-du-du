import React from 'react'

const TextSection = ({text}) => {
    const {title, description} = text
  return (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <br/>
    </div>
  )
}

export default TextSection