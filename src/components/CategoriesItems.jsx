import React from 'react'
import styled from 'styled-components'
import {mobile} from "../Responsive"
import { Link } from 'react-router-dom/dist'
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 60vh;
    position: relative;
    background-color: #4b4b4b;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`
const Info = styled.div`
top: 0px;
left: 0px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: absolute;
color: silver;
&:hover{
      box-shadow: 0px 0px 5px 2px black;
      background-color: rgba(0,0,0,.5);
      color: white;
      ${mobile({ backgroundColor: "transparent", boxShadow:"none" })}
    }
    ${mobile({ color: "white" })}
   
`
const Title = styled.h1`
    margin-bottom: 25px;
`
const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 800;
`

const CategoriesItems = ({item}) => {
  return (

    <Container>
      <Link to={`/product/${item.cat}`}>
            <Image src={item.img} className='img3'/>
            <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
            </Info>
            </Link>
    </Container>

  )
}

export default CategoriesItems
