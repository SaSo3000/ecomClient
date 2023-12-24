import React from 'react'
import { categories } from '../data'
import styled from 'styled-components'
import CategoriesItems from './CategoriesItems'
import { mobile } from '../Responsive'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    background-color: #a7a5a5;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`

const Categories = () => {
  return (
    <Container>
        {
            categories.map(item=>(
                <CategoriesItems item={item} key={item.id}/>
            ))
        }
    </Container>
  )
}

export default Categories