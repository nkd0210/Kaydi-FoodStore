import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="header" id="header">
        <div className="header-contents">
          <a href="#food-display">
            <button>View Menu</button>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .header {
    width: 100%;
    height: 34vw;
    margin: 30px auto;
    background: url("/noodles.jpg") no-repeat;
    background-size: cover;
    position: relative;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #555;

  }
  

  .header-contents {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2vw;
    max-width: 60%;
    bottom: 5%;
    left: 3vw;
    animation: fadeIn 1s;
  }

  .header-contents h2 {
    font-weight: 500;
    color: lightcoral;
    font-size: max(4.5vw, 22px);
  }

  .header-contents p {
    color: #49557e;
    font-size: 1,2vw;
  }

  .header-contents button {
    border: none;
    color: black;
    font-weight: 500;
    padding: 1vw 2.3vw;
    background-color: white;
    font-size: max(1vw, 13px);
    border-radius: 50px;
    transition: 0.3s;
  }

  .header-contents button:hover {
    background-color: #6e6b6e;
    cursor: pointer;
    color: lightcoral;
    transform: scale(1.2);
    animation: shake 0.5s ease-in-out infinite;
  }
  @keyframes shake {
    0% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-5px);
    }
    50% {
        transform: translateX(5px);
    }
    75% {
        transform: translateX(-5px);
    }
    100% {
        transform: translateX(0);
    }
}

  @media (max-width: 1050px) {
    .header-contents {
      max-width: 45%;
    }
  }

  @media (max-width: 750px) {
    .header-contents {
      max-width: 65%;
    }
    .header-contents p {
      display: none;
    }
    .header-contents button {
      padding: 2vw 4vw;
    }
  }
`;

export default Header;
