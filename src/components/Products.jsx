import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from "./Product"
import axios from 'axios'
import { ConstructionOutlined } from '@mui/icons-material'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat, filter, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
      const getProducts = async()=>{
        try{
          const res = await axios.get(cat ? `https://ecomback-y3f9.onrender.com/api/product?category=${cat}` : `https://ecomback-y3f9.onrender.com/api/product`);
          setProducts(res.data);
        }
        catch(err){
          console.log(err);
        }
      };
      getProducts();
  }, [cat]);

  useEffect(()=>{
      cat && setFilteredProducts(
          products.filter(item=> Object.entries(filter).every(  ([key,value])=>
          item[key].includes(value)
            ))
      )
  },[cat, filter, products]);

  useEffect(()=>{
  if(sort === "newest"){
    setFilteredProducts((prev)=>
    [...prev].sort((a,b)=>a.createdAt - b.createdAt)
    );
  }
  else if(sort === "asc"){
    setFilteredProducts((prev)=>
    [...prev].sort((a,b)=>a.price - b.price)
    );
  }
  else{
    setFilteredProducts((prev)=>
    [...prev].sort((a,b) => b.price - a.price)
    )
  }
  },[sort])
  return (
    <Container>
            {
              cat ?
                filteredProducts.map(item=>(
                     <Product item={item} key={item.id} />
                ))
                :
                products.slice(0, 8).map(item=>(
                  <Product item={item} key={item.id} />
             ))
            }
    </Container>
  )
}

export default Products