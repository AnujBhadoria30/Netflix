/* eslint-disable no-unused-vars */
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Body from './Components/Body'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Body/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
