import React, { useContext, useState } from 'react'
import styled from "styled-components";
import { assets } from '../assets/assets'

const Navbar = () => {

  const [menu,setMenu] = useState("menu");
    
  return (
    <Wrapper>
      <div className="navbar">
        <div className='logo'>
            <img src={assets.logo3} alt="" />
        </div>
        <ul className='navbar-menu'>
          <li onClick={() => setMenu("home")} className={menu==="home"?"active":""}>Home</li>
          <li onClick={() => setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
          <li onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</li>
          <li onClick={() => setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button>Sign In</button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .navbar{
      padding: 20px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .navbar .logo{
        font-size: 20px;
        font-weight: bold;
        color: pink;
    }

    .logo img {
        max-width: 150px;
        max-height: 50px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .navbar-menu{
        display: flex;
        list-style: none;
        gap: 20px;
        color: #49557e;
        font-size: 18px;
    }

    .navbar-right{
        display: flex;
        align-items: center;
        gap: 40px;
    }

    .navbar button{
        background: transparent;
        font-size: 16px;
        color: #49557e;
        border: 1px solid lightcoral;
        padding: 10px 30px;
        border-radius: 50px;
        cursor: pointer;
        transition: 0.3s;
    }

    .navbar button:hover{
        color: #fff;
        background-color: #6e6b6e;
    }

    .navbar .active{
        padding-bottom: 2px;
        border-bottom: 2px solid pink;
        color: lightcoral;
        transform: scale(1.1);
    }

    .navbar li{
        cursor: pointer;
    }

    .navbar-search-icon{
        position: relative;
    }

    .navbar-search-icon .dot{
        position: absolute;
        min-width: 10px;
        min-height: 10px;
        background-color: lightcoral;
        border-radius: 5px;
        top: -8px;
        right: -8px;
        
    }

    @media (max-width: 1050px) {
        .navbar-logo{
            width: 140px;
        }
        .navbar-menu{
            gap: 20px;
            font-size: 17px;
        }
        .navbar-right{
            gap: 30px;
        }
        .navbar-right img{
            width: 22px;
        }
        .navbar-right button{
            padding: 8px 25px;
        }
    }

    @media (max-width: 900px) {
        .navbar-logo{
            width: 120px;
        }
        .navbar-menu{
            gap: 15px;
            font-size: 16px;
        }
        .navbar-right{
            gap: 20px;
        }
        .navbar-right img{
            width: 20px;
        }
        .navbar-right button{
            padding: 7px 20px;
            font-size: 15px;
        }
    }

    @media (max-width: 750px) {
        .navbar-menu{
            display: none;
        }
    }
`
export default Navbar