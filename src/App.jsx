import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import NavBar from './components/NavBar'
import Signup from './components/signUp'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <NavBar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signUp' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
