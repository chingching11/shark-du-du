import React from 'react'
import TextSection from './TextSection';
import ImageSection from './ImageSection';

const data = [
    {type: 'image', value: '/assets/images/shark.png', alt: 'baby shark image', imageWidth: 50, imageHeight: 50},
    {type: 'text', title: 'Welcome to Shark Du Du Daycare', description: 'dkfjasjfjflijsdfjesafj'},
    {type: 'image', value: '/assets/images/shark.png', alt: 'baby shark image', imageWidth: 50, imageHeight: 50},
    {type: 'text', title: 'Welcome to Shark Du Du Daycare', description: 'dkfjasjfjflijsdfjesafj'},
    {type: 'image', value: '/assets/images/shark.png', alt: 'baby shark image', imageWidth: 100, imageHeight: 100},
    {type: 'text', title: 'Welcome to Shark Du Du Daycare', description: 'dkfjasjfjflijsdfjesafj'},
    {type: 'image', value: '/assets/images/shark.png', alt: 'baby shark image', imageWidth: 50, imageHeight: 50},
    {type: 'text', title: 'Welcome to Shark Du Du Daycare', description: 'dkfjasjfjflijsdfjesafj'},
    {type: 'image', value: '/assets/images/babyshark.jpeg', alt: 'baby shark image', imageWidth: 70, imageHeight: 50},
    {type: 'text', title: 'Welcome to Shark Du Du Daycare', description: 'dkfjasjfjflijsdfjesafj'},
]


let infoList;
if (data) {
    infoList = data.map((d, index) => {
        if(d.type === 'image') {
            return <ImageSection imageData = {d} key={index} />
        } else if (d.type === 'text') {
            return <TextSection textData = {d} key={index}/>
        }
    })
}


const InfoSection = () => {
  return (
    <div>
        {infoList}
    </div>
  )
}

export default InfoSection