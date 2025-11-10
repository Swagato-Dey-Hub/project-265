import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineUser } from "react-icons/ai";

function Header() {


  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const navigate = useNavigate();

  useEffect(() => {
    // This handles changes from other tabs
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    // This handles login/logout in the same tab
    const handleAuthChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  const handleProfileClick = () => navigate("/profile");
  const handleLoginClick = () => navigate("/login");


  return (
    <>
    <header className='h-15 w-3/6 px-2.5 py-1 bg-blue-700 text-white flex justify-between'>
      <div className='w-48 flex items-center gap-1'>
        <div className='h-9 w-9 p- bg-blue-500 rounded-md text-3xl font-bold font-serif flex justify-center text-center'>i</div>
        <div className='text-2xl font-semibold'>iLone</div>
      </div>
      <nav className='h-full p-2.5 ml-18'> 
        <ul className='flex gap-5 '>
          <li><NavLink to='/' className={({isActive}) => `${isActive ? "text-gray-400" : "text-white"} text-sm font-semibold` }>Home</NavLink></li>
          <li><NavLink to='/about' className={({isActive}) => `${isActive ? "text-gray-400" : "text-white"} text-sm font-semibold` }>About</NavLink></li>
          <li><NavLink to='/contact' className={({isActive}) => `${isActive ? "text-gray-400" : "text-white"} text-sm font-semibold` }>Contact</NavLink></li>
        </ul>
      </nav>
      <div className='flex justify-center items-center'>        
        {/* <button className='h-10 w-10 bg-white rounded-full mr-5 text-black flex justify-center items-center '>
          <NavLink to={'/profile'}><AiOutlineUser className='h-10 w-10'/></NavLink>
        </button>
      <button className='h-10 w-15 bg-blue-500 rounded-xl mr-5 font-semibold'><NavLink to='/login'>Log in</NavLink></button> */}
      {/* 👇 Conditional Rendering */}
        {isLoggedIn ? (
          <AiOutlineUser
            onClick={handleProfileClick}
            className="h-8 w-8 cursor-pointer hover:text-gray-300"
            title="Profile"
          />
        ) : (
          <button
            onClick={handleLoginClick}
            className="bg-white text-blue-700 px-4 py-1 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Log in
          </button>
        )}
      </div>
    </header>
    </>
  )
}

export default Header