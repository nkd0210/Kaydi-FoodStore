import React from 'react'
import styled from "styled-components"
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Routes, Route} from 'react-router-dom'
import List from './pages/List'
import Add from './pages/Add'
import Orders from './pages/Orders'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "http://localhost:5000";

  return (
    <Wrapper>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <div className="router">
        <Routes>
          <Route path='/add' element={<Add url={url}/>} />
          <Route path='/list' element={<List url={url}/>} />
          <Route path='/orders' element={<Orders url={url}/>} />

        </Routes>

        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .app-content {
    display: grid;
    grid-template-columns: 1fr 4fr;
  }
`

export default App