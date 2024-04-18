import React from "react";
import styled from "styled-components";
import { assets } from "../assets/assets";

const AppDownload = () => {
    const handleClickApp = () => {
        alert("Download link lạ là bị hack đấy hihi ^^")
    }

  return (
    <Wrapper>
      <div className="app-download" id="app-download">
        <p className="download-title">
          For Better Experience Download <br /> Our App
        </p>
        <div className="app-download-platforms">
          <img src={assets.app_store} alt="" onClick={handleClickApp}/>
          <img src={assets.play_store} alt="" onClick={handleClickApp}/>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .app-download {
    margin: auto auto;
    margin-top: 50px;
    font-size: max(3vw, 20px);
    text-align: center;
    font-weight: 500;
    /* background-color: #8c888c; */
    background: url("wood.avif");
    background-size: contain;
    border-radius: 15px;
    padding: 30px 0px;
    box-shadow: 0px 0px 10px #888;

  }
  .download-title {
    color: #999;
  }
  .app-download-platforms {
    display: flex;
    justify-content: center;
    gap: max(2vw, 10px);
    margin-top: 40px;
  }

  .app-download-platforms img {
    width: max(30vw, 120px);
    max-width: 180px;
    transition: 0.5s;
    cursor: pointer;
  }

  .app-download-platforms img:hover {
    transform: scale(1.05);
  }
`;

export default AppDownload;
