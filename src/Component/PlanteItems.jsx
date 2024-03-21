import React from 'react'
import Etoile from '../assets/etoile (1).png'
import Etoiles from '../assets/evaluation (2).png'
import CareScale from './CareScale'
import '../style/PlanteItems.css'
import Button from './Button'

function PlanteItems (props) {
  const {title, price, img}=props
  const data = [
    {id:1, img: Etoile,  },
    {id:2, img: Etoiles,},
 ]
  return (
    <div className='plante'>
			<img className='plant-item' src={img} />
			<p>{title}</p>
            <p>{price}</p>
			<div>
                {
                  data.map( item => {
                 return <CareScale key= {item.id} img = {item.img}  btn = {item.btn}/>
                
                    })
                }
                 <Button btn= "Ajouter"/>
			</div>
    </div>
  )
}

export default PlanteItems
