import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import axios from 'axios';

const Login = ({ setShowLogin }) => {

  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({
      ...data,
      [name]: value
    }));
  }

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += '/api/user/login';
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate('/');
      } else {
        alert(response.data.message);
      }
    } else {
      newUrl += '/api/user/register';
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setCurrState("Login")
      } else {
        alert(response.data.message);
      }
    }

  }

  return (
    <Wrapper>
      <div className="login-popup">
        <form onSubmit={onLogin} className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() => navigate("/")} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-popup-inputs">
            {currState === "Login" ? (
              <></>
            ) : (
              <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="Enter Name" required />
            )}
            <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder="Enter Email" required />
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder="Enter Password" required />
          </div>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
          <button type='submit'>
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>

          {currState === "Login" ? (
            <p className="register-btn">
              Create a new account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p className="register-btn">
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          )}
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .login-popup {
    /* background-color: #333841; */
    background: url("/dark_wood.jpg");
    background-size: contain;
    width: 50%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0px 0px 10px #555;
    padding: 20px 30px;
    margin: 100px auto 0px;
  }
  .login-popup-container {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 25px 30px;
    border-radius: 8px;
    font-size: 14px;
    animation: fadeIn 0.5s;
  }
  .login-popup-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
  }
  .login-popup-title h2 {
    color: lightcoral;
    font-size: 1.6rem;
  }
  .login-popup-title img {
    width: 20px;
    cursor: pointer;
    color: #fff;
  }
  .login-popup-inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .login-popup-inputs input {
    outline: none;
    border: 1px solid #c9c9c9;
    padding: 10px;
    border-radius: 4px;
  }
  .login-popup-container button {
    border: none;
    padding: 10px;
    border-radius: 4px;
    color: white;
    background-color: lightcoral;
    font-size: 15px;
  }
  .login-popup-container button:hover {
    cursor: pointer;
    color: #333;
  }
  .login-popup-condition {
    display: flex;
    align-items: start;
    gap: 8px;
  }
  .login-popup-condition p {
    color: #fff;
  }
  .login-popup p span{
    color: lightcoral;
    font-weight: 500;
    cursor: pointer;
    padding-left: 10px;
  }
  .register-btn {
    color: #fff;
  }

  @media (max-width: 990px) {
    .login-popup {
      width: 100%;
    }
  }

`;

export default Login;
