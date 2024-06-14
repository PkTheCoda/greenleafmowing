import { useState } from 'react'
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            index
            element={<Homepage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
