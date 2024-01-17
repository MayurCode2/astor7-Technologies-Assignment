import React from 'react'
import Login from './pages/ Login'
import OTPVerification from './pages/OTPVerification'
import RestaurantList from './pages/RestaurantList'
import RestaurantDetail from './pages/RestaurantDetail' 
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div > 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/OTPVerification" element={<OTPVerification />} />
        <Route path="/RestaurantList" element={<RestaurantList />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        



        
       
      </Routes>
    </div>
  )
}

export default App