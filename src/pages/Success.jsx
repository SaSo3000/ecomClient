import styled from '@emotion/styled'
import { Beenhere, CheckCircleOutlineOutlined, VerifiedUserOutlined } from '@mui/icons-material'
import React from 'react'

const Container = styled.div`
    
`
const Content = styled.div`
    
`
const Para = styled.p`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    justify-content: center;
    text-align: center;
    color: #c70000;
    margin-top: 15%;
    font-size: 25px;
    background-color: #90ff7f;
    padding: 25px;
    margin-bottom: 40px;
    letter-spacing: 4px;
    word-spacing: 9px;
    font-weight: 550;
`
const Icons = styled.div`
    color: blue;
    text-align: center;
` 

const Success = () => {
  return (
    <Container>
        <Content>
            <Para>Payment Is Successful, Order Placed...</Para>
                <Icons>
                    <CheckCircleOutlineOutlined />
                    <VerifiedUserOutlined />
                    <Beenhere />
                </Icons>
        </Content>
    </Container>
  )
}

export default Success
