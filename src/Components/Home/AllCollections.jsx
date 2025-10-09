import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import sculpture from "../../assets/Decoration/alce.jpg";
import rareVase from "../../assets/Jarrones/jarronRaro2.jpg";
import terracotta from "../../assets/Macetas/maceta2.jpg";
import { selectedCategorie } from "../../Redux/Categories/actionCategories";

const visualsByCategory = {
  decoration: {
    image: sculpture,
    description: "Organic silhouettes that elevate any corner.",
  },
  vase: {
    image: rareVase,
    description: "Statement pieces sculpted for single stems.",
  },
  pots: {
    image: terracotta,
    description: "Warm textures tailored for slow-growing greens.",
  },
};

export const AllCollections = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categorie);

  const entries =
    categories && categories.length > 0
      ? categories
      : Object.keys(visualsByCategory).map((key, index) => ({
          id: index,
          categorie: key,
        }));

  const handleNavigate = (category) => {
    dispatch(selectedCategorie(category));
    navigate("/shop");
  };

  return (
    <Section>
      <Header>
        <Eyebrow>curated sets</Eyebrow>
        <Title>All collections</Title>
        <Description>
          Explore pieces organised by mood and material to help you style your next
          favourite nook.
        </Description>
      </Header>
      <Grid>
        {entries.map((category) => {
          const visual =
            visualsByCategory[category.categorie] ?? {
              description: "Explore our curated selection of timeless ceramics.",
            };

          return (
            <Card key={category.id} onClick={() => handleNavigate(category.categorie)}>
              <CardImage $image={visual.image} />
              <CardBody>
                <CardTitle>{category.categorie}</CardTitle>
                <CardDescription>{visual.description}</CardDescription>
                <CardLink>shop the edit</CardLink>
              </CardBody>
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
};

const Section = styled.section`
  margin: clamp(3.5rem, 9vw, 7rem) 5vw;
  display: grid;
  gap: clamp(2.5rem, 6vw, 4rem);
`;

const Header = styled.div`
  max-width: 520px;
  display: grid;
  gap: 0.85rem;
`;

const Eyebrow = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.28em;
  font-size: 0.72rem;
  font-weight: 600;
  color: #9f8f7a;
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.6rem);
  font-weight: 600;
  color: #1f1f1f;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #6f6f6f;
`;

const Grid = styled.div`
  display: grid;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

const Card = styled.button`
  text-align: left;
  border: none;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: 0 16px 35px rgba(15, 23, 42, 0.08);
  transition: transform 220ms ease, box-shadow 220ms ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 45px rgba(15, 23, 42, 0.12);
  }
`;

const CardImage = styled.div`
  width: 100%;
  padding-top: 70%;
  background-color: #f3f1ed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${({ $image }) =>
    $image
      ? `background-image: linear-gradient(rgba(17, 17, 17, 0.08), rgba(17, 17, 17, 0.08)), url(${$image});`
      : ""};
`;

const CardBody = styled.div`
  padding: 1.75rem 1.75rem 1.9rem;
  display: grid;
  gap: 0.75rem;
`;

const CardTitle = styled.h3`
  text-transform: capitalize;
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: #1f1f1f;
`;

const CardDescription = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #6f6f6f;
`;

const CardLink = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #1f1f1f;
`;
