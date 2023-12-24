import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
import { login } from '../redux/apiCalls'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { loginFailure, loginStart, loginSuccess } from '../redux/userRedux'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255, 0.4),
    rgba(12, 12, 12, 0.9)
                            ),
 url("https://t3.ftcdn.net/jpg/04/17/77/78/360_F_417777825_v7o8RvkQhxpZkE0ZBD4xwzri5hGFHkO3.jpg") center no-repeat; 
 background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 25%;
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
flex-direction: column;
`
const Input = styled.input`
flex:1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
`

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`
const Link = styled.a`
margin: 10px 0;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`
const Login = () => {
  const [userName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async(e)=>{
    
    e.preventDefault();

    await axios.post("https://ecomback-y3f9.onrender.com/api/auth/login", {username:userName, password:Password}).then((res)=>{
      console.log(res.data);
      if(res.data){
        if(res.data.isAdmin || res.data.username){
          navigate("/");
        }
        if(!res.data.username){
          navigate("/error");
        }
      }
    }
    ).catch((err)=>{console.log(err); navigate("/error");});
    

  }
  
  return (
    <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    
                    <Input placeholder='username' name="username" onChange={(e)=>setUserName(e.target.value)}/>
                    <Input placeholder='password' type='password' name="password" onChange={(e)=>setPassword(e.target.value)}/>
                   
                  

                    <Button onClick={handleClick}>LOGIN</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
  )
}

export default Login
