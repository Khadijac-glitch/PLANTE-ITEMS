import React from 'react'
import '../style/Banner.css'
import leaf from '../assets/leaf+1.png'

const Banner = () => {
  const title= 'La maison jungle'
  
  return (
    <div className='banner'>
      <img src={leaf} alt="la maison jungle"  className='leaf'/>
      <h1 className='title'>{title}</h1>
    </div>
  )
}

export default Banner
