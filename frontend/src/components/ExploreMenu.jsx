import React from "react";
import styled from "styled-components";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({category,setCategory}) => {

  return (
    <Wrapper>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">
        Ready for a culinary adventure? Dive deeper into our menu and discover a world of flavors! We offer something for every palate, from classic favorites to exciting new creations. Don't be afraid to explore – your next taste bud sensation awaits!
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                key={index}
                className="explore-menu-list-item"
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_image}
                  alt=""
                />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .explore-menu {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #8c888c;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px #555;

  }

  .explore-menu h1 {
    color: #555;
    font-weight: bold;
    font-size: 1.6rem;
    text-shadow: -1px 0 lightcoral, 0 1px lightcoral, 1px 0 lightcoral, 0 -1px lightcoral;
  }

  .explore-menu-text {
    color: #333;
    max-width: 60%;
    columns: #808;
  }

  .explore-menu-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    text-align: center;
    margin: 20px 0px;
    overflow-x: scroll;
  }

  .explore-menu-list::-webkit-scrollbar {
    display: none;
  }

  .explore-menu-list-item img {
    width: 7.5vw;
    min-width: 80px;
    cursor: pointer;
    border-radius: 50%;
    transition: 0.4s ;
  }

  .explore-menu-list-item img:hover {
    transform: translateY(-10px) scale(0.7);
  }

  .explore-menu-list-item p {
    margin-top: 10px;
    margin-bottom: 10px;
    color: #fff;
    font-size: max(1.4vw, 16px);
    cursor: pointer;
  }

  /* .explore-menu hr {
    margin: 10px 0px;
    height: 2px;
    background-color: #e2e2e2;
    border: none;
  } */

  .explore-menu-list-item .active {
    border: 4px solid lightcoral;
    padding: 2px;
  }

  @media (max-width: 1050px) {
    .explore-menu-text {
      max-width: 100%;
      font-size: 14px;
    }
  }
`;
export default ExploreMenu;
