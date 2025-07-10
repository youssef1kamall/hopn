import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DashBored from './pages/DashBored'
import GymSearch from './pages/GymSearch'
import Navbar from './component/Navbar'
import MembershipPlan from './pages/MembershipPlan'
import { AutheriseProvider } from './contexts/AutheriseContext'
import { useState } from 'react'
const App = () => {
  
    
  return (
    
    <AutheriseProvider>
       <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/dashboard" element={<DashBored/>} />
          <Route path="/gym-search" element={<GymSearch/>} />
          <Route path="/membership" element={<MembershipPlan/>} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
    </AutheriseProvider>
    

  )  
}

export default App

