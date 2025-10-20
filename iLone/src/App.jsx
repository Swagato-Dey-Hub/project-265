// import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen w-full flex flex-col items-center'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    </>
  )
}

export default App
