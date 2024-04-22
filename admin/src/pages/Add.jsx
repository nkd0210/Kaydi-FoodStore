import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';

const Add = () => {
  
    const url = "http://localhost:5000";
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({
            ...data,
            [name]: value
        }));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', Number(data.price));
        formData.append('category', data.category);
        formData.append('image', image);

        const response = await axios.post(`${url}/api/food/add`, formData);
        if(response.data.success) {
            setData({
                name: "",
                description: "",
                price: "",
                category: "Salad"
            })
            setImage(false);
            toast.success("Add product successed ")
        }else {
            toast.error("Add product failed")
        }
    }

  return (
    <Wrapper>
        <div className="add">
            <form onSubmit={onSubmitHandler} className='flex-col'>
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor='image'>
                        <img src={ image ? URL.createObjectURL(image) : assets.upload_area} alt=""/>
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image hidden required" />
                </div>
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder="Enter product name" />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write description here' required ></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product category</p>
                        <select onChange={onChangeHandler} value={data.category} name="category">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product price</p>
                        <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$0' />
                    </div>
                </div>
                <button type='submit' className='add-btn'>ADD</button>
            </form>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .add {
        width: 70%;
        margin-left: max(2vw,15px);
        margin-top: 50px;
        font-size: 1rem;
        border: 1px solid #ccc;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px #555;
    }
    .add form {
        gap: 20px;
    }
    .add-img-upload img {
        width: 120px;
    }
    .add-product-name, .add-product-description {
        width: max(40%, 280px);
    }
    .add-product-name input, .add-product-description textarea {
        padding: 10px;
    }
    .add-category-price {
        display: flex;
        gap: 30px;
    }
    .add-category-price select, .add-category-price input {
        max-width: 120px;
        padding: 5px;
    }
    .add-btn {
        max-width: 120px;
        border: none;
        padding: 5px;
        background-color: lightcoral;
        border-radius: 5px;
        color: #fff;

    }
    .add-btn:hover {
        cursor: pointer;
        color: #333;
        box-shadow: 0px 0px 10px #555;
    }
    
`

export default Add