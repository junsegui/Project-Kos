import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { togglleVisibleCart } from '../../../Redux/Bag/actionBag'
import { ItemsBag } from './ItemsBag'

export const BagModalInfo = () => {
  const {items} = useSelector(state=>state.bag)

const dispatch = useDispatch()
  const subtotal = items.reduce(
    (sub, item) => (sub += item.price * item.quantity),
    0
  );
  return (
    <Container>
        <StyledP>bag</StyledP>
        <ItemContainer>
          {items.map((i)=><ItemsBag key={i.id} {...i}/>)}
        </ItemContainer>
        <SubtotalContainer>
          <p>subtotal</p> 
          <p>${subtotal}</p>
        </SubtotalContainer>
        <CheckOutButton to="/bag" onClick={()=>dispatch(togglleVisibleCart())}>checkout</CheckOutButton>
    </Container>
  )
}

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;

`
const StyledP = styled.p`
width:100%;
font-size:1.2rem;
margin-left:15%;
color:#4d4b4a;
font-weight:800;
height:auto;
`
const ItemContainer = styled.div`
height:60%;
width:90%;
display:flex;
flex-direction:column;
align-items:center;
overflow:auto;

border-top:2px solid #4d4d4d;
`
const SubtotalContainer = styled.div`
  width:100%;
  height:auto;
  display:flex;
  justify-content:space-around;
  color:#4d4d4d;
  font-weight:800;
  `
const CheckOutButton=styled(NavLink)`
  width:90%;
  height:5%;
  border-radius:15px;
  border:none;
  background-color:#e4d8d8;
  color:#4d4d4d;
  font-weight:800;
  text-align:center;
  justify-content:center;
  display:flex;
  align-items:center;
  text-decoration:none;
`
