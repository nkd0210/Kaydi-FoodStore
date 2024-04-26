import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { StoreContext } from "../context/StoreContext";
import axios from 'axios';
import { assets } from '../assets/assets';
import { LiaShoppingBagSolid } from "react-icons/lia";

const MyOrders = () => {

    const { url, token } = useContext(StoreContext)
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } })
        setData(response.data.data)
        console.log(response.data.data)
    }

    useEffect(() => {
        if (token) {
            fetchOrders()
        }
    }, [token])
    return (
        <Wrapper>
            <div className="my-orders">
                <h2 className='title'>My Orders</h2>
                <div className="container">
                    {data.map((order, index) => {
                        return (
                            <div key={index} className="my-orders-order">
                                <LiaShoppingBagSolid className='bag-icon' />
                                <p>
                                    {order.items.map((item, index) => {
                                        // check if the item is the last item so dont put the comma
                                        if (index === order.items.length - 1) {
                                            return item.name + " x " + item.quantity
                                        }
                                        else {
                                            return item.name + " x " + item.quantity + ", "

                                        }
                                    })}
                                </p>
                                <p>${order.amount}</p>
                                <p>Quantity: {order.items.length}</p>
                                <p>
                                    <span className='bullet'>&#x25cf; </span>
                                    <b className='status'>{order.status}</b>
                                </p>
                                <button className='track-btn'>Track Order</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    color: #fff;
    .my-orders {
        margin: 50px 0px;
        height: 80vh;
    }
    .title {
        color: bisque;
        text-align: center;
    }

    .my-orders .container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 30px;
    }

    .my-orders-order {
        display: grid;
        grid-template-columns: 0.5fr 3fr 1fr 1fr 1fr 1fr;
        gap: 30px;
        font-size: 1rem;
        padding: 10px 18px;
        border: 1px solid #555;
        box-shadow: 0px 0px 10px #888;
        align-items: center;
    }

    .bag-icon {
        font-size: 40px;
        color: lightcoral;
    }

    .track-btn {
        padding: 5px 0px;
        border: none;
        border-radius: 4px;

    }

    .track-btn:hover {
        cursor: pointer;
        background-color: lightcoral;
        color: #fff;
    }

    .bullet {
        color: green;
    }

    .status {
        font-weight:600;
        color: green;
    }

    @media (max-width: 600px) {
        .my-orders-order {
            display: flex;
            flex-direction: column;
            text-align: left;
            align-items: normal;
        }
        .bag-icon {
           margin: 0px auto;
           font-size: 50px;
        }
        .my-orders-order p {
            font-size: 1rem;
        }
    }

`

export default MyOrders