import React, {useState} from 'react'
import styled from "styled-components";
import Header from '../components/Header';
import ExploreMenu from '../components/ExploreMenu';
import FoodDisplay from '../components/FoodDisplay';


const Home = () => {
    const [category,setCategory] = useState("All");

  return (
    <Wrapper>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} />
       
    </Wrapper>
  )
}
const Wrapper = styled.section `
    
`

export default Home