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
import userStore from './Store/userStore'
import { useEffect } from 'react'
import Career from './Pages/Career'
import People from './Pages/People'
import Projects from './Pages/Projects'
import Research from './Pages/Reserach&Isight'
import Contact from './Pages/Contact'

function App() {
  const [count, setCount] = useState(0)
  const {checkAuth} = userStore();
  useEffect(() => {
    checkAuth();
  }, [])
  return (
    <>
     <BrowserRouter>
     <NavBar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signUp' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Career' element={<Career/>}/>
        <Route path='/People' element={<People/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Research' element={<Research/>}/>
        <Route path='/Contact' element={<Contact/>}/>

        
        
    
        
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
