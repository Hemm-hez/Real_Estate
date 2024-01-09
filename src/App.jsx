import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import CreateAcctPage from './pages/CreateAcctPage'
import LoginPage from './pages/LoginPage'

function App() {
 

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Homepage/>}/>
      <Route path='Register' element={<CreateAcctPage/>}/>
      <Route path='Login' element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
