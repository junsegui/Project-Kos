import React from 'react'
import styled from 'styled-components'

export const DataItems = () => {
  return (
    <>
    <Description>your bag</Description>
    <TotalQuantity>total quantity: ${50000}</TotalQuantity>
    <Submit>order</Submit>
    </>
  )
}

const Description = styled.p`
    font-size:1.8rem;
    color:#4d4b4a;
    font-weight:700;
`
const TotalQuantity = styled.p`
    font-size:1.5rem;
    color:#3a3837;
`
const Submit = styled.button`
    width: 50%;
    padding:3% 10%;
    border-radius:15px;
    border:none;
    background-color:#C8BEB5;
    color:#222120;
    font-weight:700;
    font-size:1.1rem;
    transition: all 1s ease-in-out;
    cursor: pointer;
    &:hover {
    transform: scale(1.2);
  }
`