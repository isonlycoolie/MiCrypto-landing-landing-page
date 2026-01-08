import React from 'react'
import NavBar from './components/navBar'
import HeroSection from './components/HeroSection'
import CardsSection from './components/CardsSection'
import AnalyticsSection from './components/AnalyticsSection'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <NavBar />
      <HeroSection />
      <CardsSection />
      <AnalyticsSection />
    </div>
  )
}

export default App