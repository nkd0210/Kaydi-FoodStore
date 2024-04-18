import React from "react";
import styled from "styled-components";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <div className="logo-title">Kaydi FoodStore</div>
            <p>
              Love our food? Stay connected! Sign up for our email list for
              exclusive offers, new menu updates, and mouthwatering recipe
              inspiration. You can also follow us on social media for a taste of
              what we're cooking up.
            </p>
            <div className="footer-social-icons">
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>
                <a href="#header">Home</a>        
              </li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy&Policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>CONTACT</h2>
            <ul>
              <li>0911223344</li>
              <li>kaydifoodstore@gmail.com</li>
              <li>Ha Noi</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2024 © Kaydi FoodStore.com - All Rights Reserved.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .footer {
    color: #d9d9d9;
    /* background-color: #333841; */
    background: url("/wood.avif");
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 8vw;
    padding-top: 80px;
    margin-top: 100px;
  }
  .logo-title {
    font-weight: bold;
    font-size: 1.6rem;
    background: linear-gradient(45deg, #ff8a00, #e52e71);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .footer-content {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 80px;
  }

  .footer-content-left,
  .footer-content-right,
  .footer-content-center {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }

  .footer-content-left li,
  .footer-content-right li,
  .footer-content-center li {
    list-style: none;
    margin-bottom: 10px;
  }
  .footer-content-left li:hover,
  .footer-content-right li:hover,
  .footer-content-center li:hover {
    cursor: pointer;
    color: #777;
  }
  .footer-content-right h2,
  .footer-content-center h2 {
    color: #fff;
  }

  .footer-social-icons img {
    width: 40px;
    margin-right: 15px;
    transition: 0.3s;
  }

  .footer-social-icons img:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  @media (max-width: 750px) {
    .footer-content {
      display: flex;
      flex-direction: column;
      gap: 35px;
    }
    .footer-copyright {
      text-align: center;
    }
  }
`;

export default Footer;
