import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
`
const Logo = styled.h1`
  ${mobile({ margin:"20px 0px 0px 10px", fontSize: "23px" })}
`
const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({ margin:"9px 0px", fontSize:"15px" })}
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props)=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  ${mobile({ margin:"4px", width:"29px", height:"29px" })}
`

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })}
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List  = styled.ul`
  margin:0;
  padding:0;
  width: 70%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({ backgroundColor: "#f9f2f2" })}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`
width  : 50%;
`
const IconComp = styled.p`
  margin-left: 20px;
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> DS's Store</Logo>
        <Desc> Hope you found all the purchase you needed, and we are exteremely sorry if you did not get one. For that solution please reach out to us, we will try our best to find that purchase. Thanks for visiting our store, keep shoping with us.</Desc>
        <SocialContainer>
        <SocialIcon color="3B5999">
            <Facebook />
        </SocialIcon>
        <SocialIcon color="E4405F">
            <Instagram />
        </SocialIcon>
        <SocialIcon color="55ACEE">
            <Twitter />
        </SocialIcon>
        <SocialIcon color="E60026">
            <Pinterest />
        </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>
            Home
          </ListItem>
          <ListItem>
            Cart
          </ListItem>
          <ListItem>
            Man Fashion
          </ListItem>
          <ListItem>
            Woman fashion
          </ListItem>
          <ListItem>
            Accessories
          </ListItem>
          <ListItem>
            My account
          </ListItem>
          <ListItem>
            Order Tracking
          </ListItem>
          <ListItem>
            Whishlist
          </ListItem>
          <ListItem>
            Terms
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room />
          <IconComp>
          410 90 YorkGate BLVD , Toronto , Ontario
          </IconComp>
        </ContactItem>
        <ContactItem>
          <Phone />
          <IconComp>
          +1 437 429-2259
          </IconComp>
        </ContactItem>
        <ContactItem>
          <MailOutline />
          <IconComp>
          saunak3000@gmail.com
          </IconComp>
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/Payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
