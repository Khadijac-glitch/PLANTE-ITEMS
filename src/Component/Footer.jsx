import React from 'react'
import '../style/Footer.css'
import leaf from '../assets/leaf+1.png'
const Footer = () => {
  return (
    <div className='footer'>
        <h3>Pour les passionées de plante <img src={leaf} alt="" className='leaf' /></h3>
        <p>Laissez nous un email</p>
        <input type="email"  placeholder='emeil...'/>
    </div>
  )
}

export default Footer
