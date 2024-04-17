import React, { useState, useContext } from "react";
import styled from "styled-components";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <Wrapper>
      <div className="food-item">
        <div className="food-item-image-container">
          <img className="food-item-image" src={image} alt="" />

          {!cartItems[id] ? (
            <img
              className="add"
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
              alt=""
            />
          ) : (
            <div className="food-item-counter">
              <img
                src={assets.remove_icon_red}
                onClick={() => removeFromCart(id)}
                alt=""
              />
              <p>{cartItems[id]}</p>
              <img
                src={assets.add_icon_green}
                onClick={() => addToCart(id)}
                alt=""
              />
            </div>
          )}
        </div>

        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p className="food-name">{name}</p>
            <img src={assets.rating_starts} className="stars" alt="" />
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .food-item {
    width: 100%;
    margin: auto;
    border-radius: 15px;
    box-shadow: 0px 0px 10px #555;
    transition: 0.3s;
    animation: fadeIn 1s;
    background-color: #333841;
  }

  .food-item:hover {
    transform: scale(1.05);
  }

  .food-item-image {
    width: 100%;
    border-radius: 15px 15px 0px 0px;
  }

  .food-item-info {
    padding: 20px;
  }
  .food-name {
    color: #8A2BE2;
  }
  .food-item-name-rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .food-item-name-rating p {
    font-size: 20px;
    font-weight: 500;
  }

  .food-item-name-rating img {
    width: 80px;
  }

  .food-item-desc {
    color: #676767;
    font-size: 14px;
  }

  .food-item-price {
    color: lightcoral;
    font-size: 22px;
    font-weight: 800;
    margin: 10px 0px;
  }

  .food-item-image-container {
    position: relative;
  }

  .food-item-image-container .add {
    width: 35px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    cursor: pointer;
    border-radius: 50%;
  }


  .food-item-image-container .add:hover {
    transition: 0.5s;
    transform: scale(1.2);
  }

  .food-item-counter {
    position: absolute;
    top: 15px;
    right: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px;
    border-radius: 50px;
    background-color: white;
  }

  .food-item-counter img {
    width: 30px;
  }
`;

export default FoodItem;
