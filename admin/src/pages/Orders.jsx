import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <Wrapper>
      <div className="order add">
        <h3>Order Page</h3>
        <div className="order-list">
          {orders.map((order, index) => (
            <div key={index} className="order-item">
              <LiaShoppingBagSolid className="bag-icon" />
              <div>
                <p className="order-item-food">
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + ", ";
                    }
                  })}
                </p>
                <p className="order-item-name">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div className="order-item-address">
                  <p>{order.address.city + ", "}</p>
                  <p>{order.address.country + ", "}</p>
                </div>
                <p className="order-item-phone">{order.address.phone}</p>
              </div>
              <p>Items: {order.items.length} </p>
              <p>${order.amount}</p>
              <select>
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Deliver">Deliver</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .order {
    max-height: 800px;
    overflow: scroll;
  }
  .order-item {
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr;
    gap: 30px;
    font-size: 1rem;
    padding: 20px;
    margin: 30px 0px;
    border: 1px solid #555;
    box-shadow: 0px 0px 10px #888;
    align-items: start;
  }

  .order-item-food,
  .order-item-name {
    font-weight: 600;
  }
  .bag-icon {
    font-size: 40px;
    color: lightcoral;
  }

  .order-item-name {
    margin: 30px 0px 5px;
  }

  .order-item-address {
    margin-bottom: 10px;
  }

  .order-item select {
    background-color: #ffe8e4;
    border: 1px solid lightcoral;
    width: max-content(10vw, 120px);
    outline: none;
    padding: 5px 10px;
  }

  @media (max-width: 600px) {
    .order-item {
      display: flex;
      flex-direction: column;
      text-align: left;
      align-items: normal;
    }
    .bag-icon {
      margin: 0px auto;
      font-size: 50px;
    }
    .order-item select {
      max-width: 200px;
    }
  }
`;
export default Orders;
