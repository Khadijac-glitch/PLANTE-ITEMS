import React from 'react'
import '../style/Sidebar.css'
import Button from './Button'
const Sidebar = () => {
    const fleur = 10
    const plante = 30
    const lisse = 12
  return (
    <div className='sidebar'>
 <h2>Panier</h2><br />
 <ul className='list'>
    <li>Rose {fleur}$</li>
    <li>Palmier{plante}$</li>
    <li>Lisse {lisse}</li>
 </ul><br />
 Total : {fleur + plante + lisse}$ <br/> <br /> <br />

<Button btn = "Ajouter au panier"/>
    </div>
  )
}

export default Sidebar
