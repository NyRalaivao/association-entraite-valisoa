import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Presentation from './components/Presentation.jsx'
import Realisations from './components/Realisations.jsx'
import Carousel from './components/Carousel.jsx'
import Presidente from './components/Presidente.jsx'
import EquipeComponent from './components/Equipe';


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Presentation/>
      <Realisations/>
      <Carousel/>
      <Presidente/>
      <EquipeComponent/>
    </>
  )
}

export default App
