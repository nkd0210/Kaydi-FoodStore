import React, {useState} from 'react'
import styled from "styled-components";
import Header from '../components/Header';
import ExploreMenu from '../components/ExploreMenu';
import FoodDisplay from '../components/FoodDisplay';
import AppDownload from '../components/AppDownload';


const Home = () => {
    const [category,setCategory] = useState("All");

  return (
    <Wrapper>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} />
        <AppDownload />
    </Wrapper>
  )
}
const Wrapper = styled.section `
    
`

export default Home