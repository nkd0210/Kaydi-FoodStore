import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import styled from 'styled-components'

const List = () => {

    const url = "http://localhost:5000";
    const[list, setList] = useState([])

    const fetchList = async() => {
        const response = await axios.get(`${url}/api/food/list`);
        if(response.data.success) {
            setList(response.data.data);

        }else {
            toast.error("Error !!!")
        }
    }
    useEffect(() => {
        fetchList();
    }, [])

    const removeFood = async (foodId) => {
        const response = await axios.delete(`${url}/api/food/delete/${foodId}`)
        await fetchList();
        if(response.data.success) {
            toast.success("Deleted Successfully")
        }else {
            toast.error("Failed to delete")
        }
    }

  return (
    <Wrapper>
        <h1>All Foods List</h1>
        <div className="list-table">
            <div className="list-table-format title">
                <b>Image</b>
                <b>Name</b>
                <b>Category</b>
                <b>Price</b>
                <b>Action</b>
            </div>
            {list.map((item, index) => {
                return (
                    <div key={index} className="list-table-format">
                        <img src={`${url}/images/` + item.image} alt=""/>
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>${item.price}</p>
                        <p onClick={() => removeFood(item._id)} className='close-btn'>X</p>
                    </div>
                )
            })}
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    h1 {
        text-align: center;
        padding: 20px 0px;
        color: lightcoral;
        font-size: 1.4rem;
    }
    .list-table-format {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
        align-items: center;
        gap: 10px;
        padding: 12px 15px;
        border: 1px solid #555;
        font-size: 13px;
        text-transform: uppercase;
        margin: 0px 10px;
    }
   
    .list-table-format.title {
        /* background-color: ; */
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }
    .list-table-format img {
        width: 150px;
    }
    .close-btn:hover {
        color: lightcoral;
        cursor: pointer;
    }
    @media (max-width: 900px) {
        .list-table-format img {
            width: 100px;
        }
    }

    @media (max-width: 750px) {
        .list-table-format img {
            width: 50px;
        }
        .list-table-format.title {
            display: none;
        }

    }
`
export default List