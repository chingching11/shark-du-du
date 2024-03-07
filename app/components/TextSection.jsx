import React from 'react'

const TextSection = ({textData}) => {
    const {title, description} = textData
  return (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <br/>
    </div>
  )
}

export default TextSection