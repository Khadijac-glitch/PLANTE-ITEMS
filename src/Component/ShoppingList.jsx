import React from 'react'
import  Monsera from '../assets/monstera.jpg'
import PlanteItems from './PlanteItems'
import '../style/ShoppingList.css'
const ShoppingList = () => {
    const data = [
        { id: 1, title: "Rose", price: "30", img :Monsera},
        { id: 2, title: "Lisse", price: "20", img :Monsera},
        { id: 3, title: "Jaune", price: "10", img :Monsera},  
    ]

  return (
    <div className='shopping'>
    {
        data.map(item  => {
            return <PlanteItems key= {item.id} title = {item.title} price = {item.price} img = {item.img}/>
        })
    }
     
    </div>
  )
}

export default ShoppingList
