import React from 'react'

import { Routes, Route } from 'react-router-dom'



import Navbar from './components/Footer/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Coin/Home/Home'
import Coin from './pages/Coin/Coin'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
     <Footer/>
    </div>
  )
}

export default App