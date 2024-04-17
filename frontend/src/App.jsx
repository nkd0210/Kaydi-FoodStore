import React, { useState } from 'react'
import Navbar from './components/Navbar'
import styled from "styled-components";
import Home from './pages/Home';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';


const App = () => {

  return (
    <Wrapper>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .app {
    width: 80%;
    margin: auto;
  }

`

export default App