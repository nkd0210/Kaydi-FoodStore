import React, { useContext, useState } from "react";
import styled from "styled-components";
import { StoreContext } from "../context/StoreContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const handleFreeShip = () => {
    const codeValue = document.getElementById("freeship").value;
    const totalValue = document.querySelector(".total-price");
    const shippingValue = document.querySelector(".shipping-fee");

    if (codeValue.toLowerCase() === "kaydi") {
      shippingValue.textContent ="$0";
      totalValue.textContent = `$${getTotalCartAmount()}`;
    }
  };

  const navigate = useNavigate();

  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);

  return (
    <Wrapper>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Dishes Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={`${url}/images/` + item.image} alt="" />
                  <p>{item.name}</p>
                  <p className="item-prop">${item.price}</p>
                  <p className="item-prop">{cartItems[item._id]}</p>
                  <p className="item-prop">
                    ${item.price * cartItems[item._id]}
                  </p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-promo-code">
          <div>
            <p style={{ color: "lightcoral" }}>Enter Free Ship Code.</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Fresship Code" id="freeship" />
              <button onClick={handleFreeShip}>Use</button>
            </div>
          </div>
        </div>
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Shipping Fee</p>
              <p className="shipping-fee">
                ${getTotalCartAmount() === 0 ? 0 : 5}
              </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b className="total-price">
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}
              </b>
            </div>
          </div>
          <Link to='/order'>
            <button onClick={() => navigate("/order")}>
              Proceed To Checkout
            </button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .cart {
    margin-top: 100px;
  }
  .cart-bottom {
    border: 1px solid #888;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0px 0px 10px #555;
  }
  .cart-items-title {
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr 1fr 1fr 0.5fr;
    align-items: center;
    color: lightcoral;
    font-size: max(1vw, 1.2rem);
  }

  .cart-items-item {
    margin: 10px 0px;
    color: #999;
  }

  .cart-items-item img {
    width: 100px;
    border-radius: 10px;
  }

  .cart hr {
    height: 1px;
    background-color: #e2e2e2;
    border: none;
  }

  .cart-items-item .cross {
    display: flex;
    justify-content: center;
  }

  .cart-items-item .cross:hover {
    color: lightcoral;
    cursor: pointer;
  }
  .cart-bottom {
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    gap: max(12vw, 20px);
  }

  .cart-total {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .cart-total-details {
    display: flex;
    justify-content: space-between;
    color: #888;
  }

  .cart-total-details p:first-child {
    font-weight: bold;
  }

  .cart-total hr {
    margin: 10px 0px;
  }
  .cart-total h2 {
    color: lightcoral;
    font-size: max(1vw, 1.2rem);
  }
  .cart-total button {
    border: none;
    color: white;
    background-color: lightcoral;
    width: max(15vw, 200px);
    /* width: 100%; */
    padding: 12px 0px;
    border-radius: 4px;
  }

  .cart-total button:hover {
    cursor: pointer;
    color: #333;
  }

  .cart-promo-code {
    flex: 1;
  }

  .cart-promo-code p {
    color: #555;
  }

  .cart-promocode-input {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #eaeaea;
    border-radius: 4px;
  }

  .cart-promocode-input input {
    background: transparent;
    border: none;
    outline: none;
    padding-left: 10px;
  }

  .cart-promocode-input button {
    width: max(10vw, 150px);
    padding: 12px 5px;
    background-color: black;
    border: none;
    color: white;
    border-radius: 4px;
  }

  .cart-promocode-input button:hover {
    cursor: pointer;
    color: lightcoral;
  }

  @media (max-width: 750px) {
    .cart-bottom {
      flex-direction: column;
    }
    .cart-promo-code {
      justify-content: start;
    }
    .cart-items-title p {
      font-size: 2.6vw;
    }
    .cart-items-item img {
      width: 50px;
    }
  }
`;

export default Cart;
