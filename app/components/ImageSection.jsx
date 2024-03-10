import React from 'react'
import Image from 'next/image' 

const ImageSection = ({imageData}) => {
    const {value, alt, imageWidth, imageHeight} = imageData
  return (
    <div>
        <Image className="mx-auto" src={value} alt={alt} width={imageWidth} height={imageHeight}/>
    </div>
  )
}

export default ImageSection