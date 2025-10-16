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
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.98), rgba(248, 245, 240, 0.9));
  border-radius: 26px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(31, 31, 31, 0.05);
  box-shadow: 0 22px 44px rgba(31, 31, 31, 0.12);
  transition: transform 260ms ease, box-shadow 260ms ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 60px rgba(31, 31, 31, 0.16);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 82%;
  background: #f8f6f3;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(17, 17, 17, 0) 35%, rgba(17, 17, 17, 0.2) 100%);
    opacity: 0;
    transition: opacity 240ms ease;
  }

  ${Card}:hover &::after {
    opacity: 1;
  }
`;

const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 320ms ease;

  ${Card}:hover & {
    transform: scale(1.04);
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 1.4rem 1.6rem 1.75rem;
`;

const Name = styled.h3`
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #1f1f1f;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.12rem;
  }
`;

const Price = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 1.1rem;
  border-radius: 999px;
  background: rgba(31, 31, 31, 0.08);
  color: #3f3b36;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.05em;
`;
