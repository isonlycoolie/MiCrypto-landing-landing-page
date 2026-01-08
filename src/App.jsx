import React from 'react'
import NavBar from './components/navBar'
import HeroSection from './components/HeroSection'
import CardsSection from './components/CardsSection'
import AnalyticsSection from './components/AnalyticsSection'

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <CardsSection />
      <AnalyticsSection />
    </div>
  )
}

export default App