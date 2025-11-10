import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Profile from './components/Register/Profile.jsx'
import AuthPage from './components/Register/AuthPage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import PublicRoute from './components/PublicRoute.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<ProtectedRoute> <Home/> </ProtectedRoute>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<ProtectedRoute> <Contact/> </ProtectedRoute>}/>
      <Route path='/login' element={<PublicRoute> <AuthPage/> </PublicRoute>}/>
      <Route path='/profile' element={<ProtectedRoute> <Profile/> </ProtectedRoute>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
