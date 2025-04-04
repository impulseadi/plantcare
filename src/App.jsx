import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BestsellingPlants from './components/BestSellingPlants'
import BestsellingDecor from './components/BestsellingDecor'
import CustomerReviews from './components/CustomerReviews'
import Footer from './components/Footer'


function App() {
 

  return (
    <>
    <Navbar/>
    <Hero/>
    <BestsellingPlants/>
    <BestsellingDecor/>
    <CustomerReviews/>
    <Footer/>
   </>
  )
}

export default App
