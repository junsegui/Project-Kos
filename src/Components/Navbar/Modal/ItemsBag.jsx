import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import	alce from "../../../assets/Decoration/alce.jpg"
import { addItem, deleteItem } from '../../../Redux/Bag/actionBag'

export const ItemsBag = ({img,tittle,price,quantity,id}) => {
  const {counter}=useSelector(state=>state.bag)
  const dispatch = useDispatch()
  
  return (
    <ContainerItem>
      <ImgContainer>
      <IMG src={img}/>
      </ImgContainer>
      <DataContainer>
        <StyledP>{tittle}</StyledP>
        <StyledP>${price}</StyledP>
        <ButtonsContainer>
        <ButtonsCont>
        <Button onClick={(e) => dispatch(deleteItem(id))}>-</Button>
        <Quantity>{quantity}</Quantity>
        <Button onClick={(e) =>
              dispatch(addItem({ img, price, tittle, quantity, id }))
            }>+</Button>
        </ButtonsCont>
        <TotalItem>${price*quantity}</TotalItem>
        </ButtonsContainer>
      </DataContainer>
    </ContainerItem>
  )
}
const ContainerItem=styled.div`
width:100%;
height:60%;
border-bottom:2px solid #4d4d4d;
padding-bottom:5%;
padding-top:5%;
display:flex;
align-items:center;

`
const ImgContainer= styled.div`
width:50%;
height: 90%;
display:flex;
align-items:center;
justify-content:center;
border-radius:15px;
`
const IMG = styled.img`
height:100%;
width:60%;
border-radius:15px;
@media (max-width: 500px) {
  width:80%;
}
`
const DataContainer=styled.div`
  width:60%;
  height:100%;
  display:flex;
  flex-direction:column;
`
const ButtonsContainer=styled.div`
width:100%;
height:auto;
display:flex;
justify-content:space-around;
`
const ButtonsCont = styled.div`
  width:40%;
  height:auto;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;

`
const TotalItem = styled.p`
  width:40%;
  color: #4d4d4d;
  font-weight:800;
  font-size:1.2rem;
`
const StyledP = styled.p`
  font-size:1.2rem;
  color: #4d4d4d;
  font-weight:800;
`
const Button = styled.button`
  background-color:#f2f2f2;
  border-radius: 15px;
  border: none;
  color: #222120;
  border:1px solid #4d4d4d;
  padding-left:5%;
  padding-right:5%;
  width:50%;
  height:40%;
`
const Quantity = styled.p`
margin-left:5%;
margin-right:5%;`