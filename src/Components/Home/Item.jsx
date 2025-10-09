import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Item = ({ img, price, id, title }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/shop/${id}`);
  };

  return (
    <Card onClick={handleNavigate}>
      <ImageWrapper>
        <Image src={img} alt={title} />
      </ImageWrapper>
      <CardBody>
        <Name>{title}</Name>
        <Price>${price}</Price>
      </CardBody>
    </Card>
  );
};

const Card = styled.article`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 18px 35px rgba(15, 23, 42, 0.08);
  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 45px rgba(15, 23, 42, 0.12);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 82%;
  background: #f8f6f3;
`;

const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardBody = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 1.25rem 1.5rem 1.5rem;
  gap: 1rem;
`;

const Name = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #1f1f1f;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Price = styled.span`
  font-size: 0.95rem;
  font-weight: 500;
  color: #6f6f6f;
`;
