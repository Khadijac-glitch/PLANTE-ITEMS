import React from 'react'
import './App.css'
import Banner from './Component/Banner'
import Sidebar from './Component/Sidebar'
import Categories from './Component/Categories'
import ShoppingList from './Component/ShoppingList'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
     <div className ='app'>  
       <Sidebar/>
      <ShoppingList/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
