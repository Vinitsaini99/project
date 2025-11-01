import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Page/Home.jsx'
import About from './Page/About.jsx'
import Navbar from './components/Navbar.jsx'

import Category from './Page/Category.jsx'
import Login from './Page/Login.jsx'
import Footer from './Page/Footer.jsx'
import Product from './components/product/Product.jsx'
const App = () => {
 
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Category' element={<Category />} />
          <Route path='/login' element={< Login/>}/>
          
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
