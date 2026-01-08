import React from 'react'
import NavBar from './components/navBar'
import HeroSection from './components/HeroSection'
import CardsSection from './components/CardsSection'

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <CardsSection />
    </div>
  )
}

export default App