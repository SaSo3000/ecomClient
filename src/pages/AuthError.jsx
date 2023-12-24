import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Container = styled.div`
margin-top: 20%;
`
const Error = styled.div`
background-color: black;
color: red;
border-left: 7px solid red;
box-shadow: 0px 0px 2px 3px;
margin-left: 30px;
text-align: center;
padding: 20px;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
word-spacing: 6px;
letter-spacing: 3px;
font-weight: 500;
`
const Span = styled.span`
  color: #ffffff;
  text-decoration: underline;
  font-size: large;
  margin: 40px;
`

const AuthError = () => {
  return (
    <Container>
      <Error>You are not authorized to access this application. Kindly register yourself on our records. <Link to="/register"><Span>Register</Span></Link></Error>
    </Container>
  )
}

export default AuthError
