import React from 'react'
import styled from "styled-components"
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <Wrapper>
        <div className="navbar">
            <div className="logo">Kaydi FoodStore Admin</div>
            <div className="admin-profile">
                <img src={assets.admin} alt="" className="profile" />
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 4%;
    background: url('/wood.avif');
    background-size: contain;
  }
  .navbar .logo {
    font-weight: bold;
    font-size: 1.6rem;
    background: linear-gradient(45deg, #ff8a00, #e52e71);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: 0.3s;
  }
  .admin-profile {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .admin-profile .profile {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`
export default Navbar