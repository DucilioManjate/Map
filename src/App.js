import React from 'react'
import './App.css'
import Intro from './Components/Introdução'
import Contact from './Components/SeçãoContato/Contacto'
import Aviso from './Components/AvisoLegal'
import Map from './Components/Map'
import Footer from './Components/footer'

function App() {
  return (
    <div className="App">
      <Intro />
      <Contact />
      <Aviso />
      <Map />
      <Footer/>
      
    </div>
  )
}

export default App
