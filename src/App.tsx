import React from 'react'
import Navbar from './sections/Navbar'
import Wrapper from './sections/Wrapper'
import Footer from './sections/Footer'
import Background from './components/Background'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './scss/index.scss'

function App() {
  return <div className='main-container'>
    <Background />
    <BrowserRouter>
    <div className="app">
      <Navbar />
      <Wrapper />
      <Footer />
    </div>
    </BrowserRouter>
  </div>
}

export default App
