import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from '../Responsive'
import { useLocation } from 'react-router-dom/dist'

const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content:space-around;
` 
const Filter = styled.div`
margin: 20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection:"column" })}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`
const Option = styled.option`
    
`

const ProductList = () => {
  
  const location = useLocation();
  
  const cat = location.pathname.split("/")[2];
 console.log(cat);
  
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");
  

  const handleFilters = (e) =>{
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name] : value,
    })
  }
  
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter Products: </FilterText>
            <Select name="color" onChange={handleFilters}>
                <Option disabled >COLOR</Option>
                <Option>white</Option>
                <Option>black</Option>
                <Option>red</Option>
                <Option>blue</Option>
                <Option>yellow</Option>
                <Option>green</Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
                <Option disabled >SIZE</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
                </Select>    
        </Filter>
        <Filter>
        <FilterText>Sort Products: </FilterText>
        <Select onChange={(e)=>setSort(e.target.value)}>
                <Option value="newest">Newest</Option>
                <Option value="asc">Price (asc)</Option>
                <Option value="desc">Price (desc)</Option>
                </Select>
        </Filter>
      </FilterContainer>
     
      <Products cat={cat} filter = {filter} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
    
  )
}


export default ProductList
