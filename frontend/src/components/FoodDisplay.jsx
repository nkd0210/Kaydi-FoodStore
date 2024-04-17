import React, { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <Wrapper>
      <div className="food-display" id="food-display">
        <h2>Our menu</h2>
        <div className="food-display-list">
          {food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .food-display {
    margin-top: 30px;
  }

  .food-display h2 {
    font-size: max(2vw, 24px);
    font-weight: 600;
    color: #555;
    text-shadow: -1px 0 lightblue, 0 1px lightblue, 1px 0 lightblue, 0 -1px lightblue;
  }

  .food-display-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    margin-top: 30px;
    gap: 30px;
    row-gap: 50px;
  }
`;

export default FoodDisplay;
