import styled from '@emotion/styled'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { sliderItems } from '../data'
import { mobile } from '../Responsive'

const Container = styled.div`

width: 100%;
height: 85vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({ display: "none" })}

`
const Arrow = styled.div`
    
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: ${(props)=> {
        if(props.direction === "left") return "10px"}};
    right: ${(props)=> {
        if(props.direction === "right") return "10px"}};
    margin: auto;
    opacity: 0.5;
    z-index: 2;
    cursor: pointer;

`

const Wrapper = styled.div`
    
        height: 100%;
        display: flex;
        transition: all 1.5s ease;
        transform: translateX(${props=>props.slideIndex * -100}vw);

`

const Slide = styled.div`

width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${(props)=> props.bg};

`
const ImgContainer = styled.div`

    height: 100%;
    flex: 1;
    margin-left: 70px;

`

const Image = styled.img`

height: 80%;
width: 100%;
margin-top: 20px;

`
const InfoContainer = styled.div`

    flex: 1;
    padding: 50px;
    color : white;

`
const Title = styled.h1`

font-size: 30px;

`
const Desc = styled.p`

margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;

`
const Button = styled.button`

padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
color: white;
border: 0.5px solid white;

`

const Slides = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction === "left") {
                setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
        }
    }

  return (
    <Container>
      
    <Arrow direction = "left" onClick={()=>handleClick("left")}>
    <ArrowLeftOutlined />
    </Arrow>
    <Wrapper slideIndex = {slideIndex}>

    {
        sliderItems.map(item=>(
            <Slide bg={item.bg}>
            <ImgContainer>
            <Image src= {item.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOW NOW</Button>
            </InfoContainer>
            </Slide>
        ))
    }
   

               
    
    </Wrapper>
    <Arrow direction="right" onClick={()=>handleClick("right")}>
    <ArrowRightOutlined />
    </Arrow>

    </Container>
  )
}


export default Slides
