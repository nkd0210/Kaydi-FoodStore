import React, { useState } from 'react'
import Navbar from './components/Navbar'
import styled from "styled-components";
import Home from './pages/Home';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Login from './pages/Login';


const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Wrapper>
      {/* {showLogin ? <Login/> :<></>} */}
      <Navbar setShowLogin={setShowLogin} />
      <div className="app">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/signin' element={<Login setShowLogin={setShowLogin} />} />

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