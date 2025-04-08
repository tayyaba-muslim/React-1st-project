import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Home from './components/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/navbar/Navbar'
import Todo from './components/Todo/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Todo/>
     <Footer/>
    </>
  )
}

export default App
