import React from 'react'
import styled from "styled-components"
import { assets } from '../assets/assets'
import { IoIosAddCircleOutline  } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Wrapper>
        <div className="sidebar">
            <div className="sidebar-options">
                <NavLink to='/add' className="sidebar-option">
                    <IoIosAddCircleOutline className='icon' />
                    <p>Add Items</p>
                </NavLink>
                <NavLink to='/list' className="sidebar-option">
                    <FaList className='icon'/>
                    <p>List Items</p>
                </NavLink>
                <NavLink to='/orders' className="sidebar-option">
                  <MdOutlineFavoriteBorder className='icon'/>
                    <p>Order Items</p>
                </NavLink>
            </div>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  .sidebar {
    /* width: 20%; */
    min-height: 100vh;
    border: 1.5px solid #a9a9a9;
    border-top: 0;
    font-size: max(1vw, 10px);
  }
  .sidebar-options {
    padding-top: 50px;
    padding-left: 20%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .sidebar-option {
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1px solid #a9a9a9;
    border-right: 0;
    padding: 8px 10px;
    border-radius: 10px 0px 0px 10px;
    box-shadow: 0px 0px 10px #555;
  }
  .sidebar-option:hover {
    cursor: pointer;
  }
  .sidebar-option p {
    color: lightcoral;
    font-size: 1.2rem;
  }
  .sidebar-option .icon {
    color: lightcoral;
    font-size: 1.2rem;
  }
  .sidebar-option.active {
    border-color: lightcoral;
    background-color: lightblue;
  }

  .sidebar-option.active p {
    color: #333;
  }
  @media (max-width: 900px) {
    .sidebar-option p {
      font-size: 1rem;
    }
  }

  @media (max-width: 750px) {
    .sidebar-option p {
      display: none;
    }

  }
`

export default Sidebar