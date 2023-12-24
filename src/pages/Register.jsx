import React, { useState } from 'react'
import styled from 'styled-components'
import {mobile} from "../Responsive"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255, 0.4),
    rgba(12, 12, 12, 0.9)
                            ),
 url("https://img.freepik.com/premium-photo/top-view-desk-concept-with-copy-space_756748-15787.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1699488000&semt=ais") center no-repeat; 
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({ width: "75%" })}
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Input = styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
${mobile({ minWidth: "50%", margin:"10px 10px 1px 0px"})}
`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`
const Err = styled.p`
color: red;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-weight: 600;
padding: 13px;
display: none;
`

const Register = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleClick = async(e) =>{
        e.preventDefault();
        
        await axios.post("https://ecomback-y3f9.onrender.com/api/auth/register", {username, email, password}).then((res)=>{
            console.log(res);
            if(res.data){
                navigate("/");
            }
        }).catch((err)=>{
            document.getElementById("err").style.display = 'block';
            
        });

        
    }
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder='name' />
                    <Input placeholder='last name' />
                    <Input placeholder='username' onChange={(e)=>{setUserName(e.target.value)}}/>
                    <Input placeholder='email' onChange={(e)=>{setEmail(e.target.value)}}/>
                    <Input placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
                    <Input placeholder='confirm password' />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button onClick={handleClick}>CREATE</Button>
                    <Err id='err' >Please try again!</Err>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
