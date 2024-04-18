import React, { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../context/StoreContext";
import { Link, useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <Wrapper>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email Address" />
          <div className="multi-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="Phone" />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2 className="title">Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>
                  ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}
                </b>
              </div>
            </div>
            <button>Proceed To Payment</button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .place-order {
    display: flex;
    align-items: start;
    justify-content: space-evenly;
    gap: 50px;
    margin-top: 100px;
  }

  .place-order-left {
    width: 100%;
    max-width: max(30%, 500px);
    border: 1px solid #888;
    padding: 20px;
    box-shadow: 0px 0px 10px #555;
    border-radius: 15px;
    background: url("/wood.avif");
    background-size: contain;
  }

  .place-order-left .title {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 50px;
    color: lightcoral;
  }

  .place-order-left input {
    margin-bottom: 15px;
    width: 100%;
    padding: 10px;
    border: 1px solid #c5c5c5;
    border-radius: 4px;
    outline-color: tomato;
  }

  .place-order-left .multi-fields {
    display: flex;
    gap: 20px;
  }

  .place-order-right {
    width: 100%;
    max-width: max(40%, 500px);
    border: 1px solid #888;
    padding: 20px;
    box-shadow: 0px 0px 10px #555;
    border-radius: 15px;
  }

  .place-order .cart-total button {
    /* margin-top: 30px; */
  }

  .cart-total {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
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

  @media (max-width: 750px) {
    .place-order {
      flex-direction: column;
    }
  }
`;

export default PlaceOrder;
