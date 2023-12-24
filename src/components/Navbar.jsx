
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import React from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined } from "@mui/icons-material";
import { mobile } from "../Responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Container = styled.div`

height: 60px;
${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    
    padding: 10px 20px;
    display: flex;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}

`

const Left = styled.div` 

flex: 1;
display: flex;
align-items: center;

`
const Center = styled.div` 

flex: 1;

`
const Right = styled.div` 

flex: 1;
display: flex;
align-items:center;
justify-content: flex-end;
${mobile({ justifyContent: "center", flex: 2 })}
`
const Language = styled.span`
    
font-size: 16px;
cursor: pointer;
${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
    
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;

`
const Input = styled.input`
    
border: white;
${mobile({ width: "50px" })}

`
const Logo = styled.h1`
    
font-weight: bold;
text-align: center;
${mobile({ fontSize: "18px" })}

`
const MenuItem = styled.div`
    
font-size: 14px;
cursor: pointer;
margin-left: 25px;

${mobile({ fontSize: "12px", marginLeft: "10px" })}

`



const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const cart = useSelector(state => state.cart);
  return (
    <Container>
      <Wrapper>
        <Left >
          <Language> EN </Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: 14 }} />
          </SearchContainer>
        </Left>
        <Center > <Logo>DS's Store</Logo> </Center>
        <Right >
          <Link to="/register">
          <MenuItem> REGISTER </MenuItem>
          </Link>
          <Link to="/login">
          <MenuItem> SIGN IN </MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />

              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar