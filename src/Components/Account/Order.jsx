import React from 'react'
import styled from 'styled-components'

export const Order = ({subtotal,orderId,status}) => {
  return (
    <OrderContainer>
        <OrderNumber>order id: <Span>{orderId}</Span></OrderNumber>
        <Status>status: <Span>{status}</Span></Status>
        <Subtotal>subtotal:<Span>${subtotal}</Span></Subtotal>
    </OrderContainer>
  )
}
const OrderContainer = styled.div`
    width:40%;
    height:30%;
    border:1px solid #413d3c;
    display:flex;
    margin-right:1%;
    margin-bottom:1%;
    flex-direction:column;
 
    color:#413d3c;
    border-radius:15px;
    background-color:#c8beb5;
`
const OrderNumber = styled.p`
    font-size:1.2rem;
    margin-bottom:2%;
    margin-left:4%;
`
const Status = styled.p`
    font-size:1.4rem;
    margin:0;
    margin-left:4%;
`
const Subtotal = styled.p`
    font-size:1.3rem;
    margin-bottom:2%;
    margin-left:4%;
    margin-top:0;
`
const Span = styled.span`
    font-weight:800;
    font-size:1.2rem;
    width:100%;
`