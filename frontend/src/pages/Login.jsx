import React, { useState } from "react";
import styled from "styled-components";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="login-popup">
        <form className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() => navigate("/")} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-popup-inputs">
            {currState === "Login" ? (
              <></>
            ) : (
              <input type="text" placeholder="Enter Name" required />
            )}
            <input type="text" placeholder="Enter Email" required />
            <input type="password" placeholder="Enter Password" required />
          </div>
          <button>
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
          {currState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p>
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
    background-color: #333841;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0px 0px 10px #555;
    padding: 20px 30px;
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
  .login-popup-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
  }
  .login-popup-title img{
    width: 16px;
    cursor: pointer;
    color: #fff;
}

`;

export default Login;
