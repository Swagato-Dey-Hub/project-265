import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <header className='h-17 w-3/6 bg-blue-900 text-white'>
      <nav className='h-full p-2.5 flex justify-between items-center'>
        <div className='w-50 flex items-center gap-1'>
          <div className='h-10 w-10 bg-blue-600 rounded-md text-3xl font-bold font-serif flex justify-center items-center'>i</div>
          <div className='text-2xl font-semibold'>iLone</div>
        </div>
        <ul className='flex gap-5 font-semibold'>
          <li><NavLink to='/' className={({isActive}) => `${isActive ? "text-gray-400" : "text-white"}` }>Home</NavLink></li>
          <li><NavLink to='/about' className={({isActive}) => `${isActive ? "text-gray-400" : "text-white"}` }>About</NavLink></li>
          <li><NavLink to='/contact' className={({isActive}) => `${isActive ? "text-gray-400" : "text-white"}` }>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header