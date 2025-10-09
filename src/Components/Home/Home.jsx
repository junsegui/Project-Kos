import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { AllCollections } from "./AllCollections";
import { NewArrivals } from "./NewArrivals";
import { OurStory } from "./OurStory";

const highlights = [
  {
    title: "Hand-thrown",
    description: "Every piece is formed on the wheel, resulting in subtle variations and one-of-a-kind silhouettes.",
  },
  {
    title: "Small batches",
    description: "We fire weekly to keep stock fresh and to minimise waste across the studio.",
  },
  {
    title: "Natural glazes",
    description: "Mineral pigments and matte finishes designed to age beautifully with your space.",
  },
];

const stats = [
  { label: "years crafting", value: "08" },
  { label: "unique pieces", value: "350+" },
  { label: "local partners", value: "24" },
];

export const Home = () => {
  return (
    <Main>
      <Hero>
        <HeroContent>
          <HeroEyebrow>minimal living, mindful making</HeroEyebrow>
          <HeroTitle>Handcrafted ceramics for serene spaces</HeroTitle>
          <HeroDescription>
            Refined silhouettes and tactile glazes designed to soften modern interiors.
            Discover pieces made in slow, deliberate batches in our Buenos Aires
            studio.
          </HeroDescription>
          <CtaGroup>
            <PrimaryButton to="/shop">Shop the collection</PrimaryButton>
            <SecondaryLink to="/ourstory">Meet the maker</SecondaryLink>
          </CtaGroup>
          <Stats>
            {stats.map((stat) => (
              <Stat key={stat.label}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </Stat>
            ))}
          </Stats>
        </HeroContent>
      </Hero>

      <HighlightsSection>
        {highlights.map((item) => (
          <HighlightCard key={item.title}>
            <HighlightTitle>{item.title}</HighlightTitle>
            <HighlightDescription>{item.description}</HighlightDescription>
          </HighlightCard>
        ))}
      </HighlightsSection>

      <QuoteSection>
        <Quote>
          “Kos celebrates the quiet moments of the everyday — warm coffee at dawn,
          greenery on the windowsill, books stacked beside the sofa.”
        </Quote>
      </QuoteSection>

      <NewArrivals />
      <AllCollections />
      <OurStory />

      <NewsletterSection>
        <NewsletterContent>
          <NewsletterEyebrow>stay in the loop</NewsletterEyebrow>
          <NewsletterTitle>Journal & kiln updates</NewsletterTitle>
          <NewsletterDescription>
            Join our mailing list for studio notes, early releases, and invitations to
            pop-up events.
          </NewsletterDescription>
        </NewsletterContent>
        <NewsletterForm>
          <EmailInput type="email" placeholder="you@example.com" aria-label="Email address" />
          <SubmitButton type="button">subscribe</SubmitButton>
        </NewsletterForm>
      </NewsletterSection>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const Hero = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  min-height: clamp(560px, 90vh, 720px);
  padding: clamp(3.5rem, 10vw, 8rem) 5vw;
  background: linear-gradient(120deg, rgba(242, 240, 235, 0.92), rgba(255, 255, 255, 0.9)),
    url("https://images.unsplash.com/photo-1616628188505-404cc2a255a0?auto=format&fit=crop&w=1800&q=80")
      center/cover no-repeat;
`;

const HeroContent = styled.div`
  max-width: 620px;
  display: grid;
  gap: 1.5rem;
`;

const HeroEyebrow = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 0.72rem;
  font-weight: 600;
  color: #9f8f7a;
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(2.6rem, 5vw, 3.6rem);
  font-weight: 600;
  color: #1f1f1f;
  line-height: 1.1;
`;

const HeroDescription = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #4f4f4f;
`;

const CtaGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  padding: 0.95rem 2.6rem;
  border-radius: 999px;
  background: #1f1f1f;
  color: #f6f4f1;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 600;
  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 25px rgba(15, 23, 42, 0.16);
  }
`;

const SecondaryLink = styled(Link)`
  font-size: 0.9rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #1f1f1f;
  text-decoration: none;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid currentColor;
  transition: opacity 200ms ease;

  &:hover {
    opacity: 0.6;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const Stat = styled.div`
  display: grid;
  gap: 0.35rem;
`;

const StatValue = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  color: #1f1f1f;
`;

const StatLabel = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7c7c7c;
`;

const HighlightsSection = styled.section`
  margin: clamp(3rem, 7vw, 5rem) 5vw;
  display: grid;
  gap: clamp(1.25rem, 2.5vw, 2rem);
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

const HighlightCard = styled.article`
  padding: clamp(1.5rem, 3vw, 2.25rem);
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 18px 35px rgba(15, 23, 42, 0.08);
  display: grid;
  gap: 0.9rem;
`;

const HighlightTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1f1f1f;
`;

const HighlightDescription = styled.p`
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.6;
  color: #6f6f6f;
`;

const QuoteSection = styled.section`
  margin: 0 5vw;
  border-radius: 32px;
  background: #f6f4f1;
  padding: clamp(3rem, 8vw, 5rem);
  display: flex;
  justify-content: center;
`;

const Quote = styled.blockquote`
  margin: 0;
  max-width: 680px;
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-style: italic;
  color: #3a3a3a;
  text-align: center;
  line-height: 1.6;
`;

const NewsletterSection = styled.section`
  margin: clamp(4rem, 10vw, 7rem) 5vw clamp(5rem, 11vw, 9rem);
  padding: clamp(2.5rem, 6vw, 4.5rem);
  background: #1f1f1f;
  border-radius: 32px;
  display: grid;
  gap: 2rem;
  color: #f5f2ed;

  @media (min-width: 840px) {
    grid-template-columns: 1fr auto;
    align-items: center;
  }
`;

const NewsletterContent = styled.div`
  display: grid;
  gap: 0.75rem;
`;

const NewsletterEyebrow = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 0.7rem;
  font-weight: 600;
`;

const NewsletterTitle = styled.h2`
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.6rem);
  font-weight: 600;
`;

const NewsletterDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(245, 242, 237, 0.8);
`;

const NewsletterForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 0.95rem 1.25rem;
  border-radius: 999px;
  border: none;
  background: rgba(255, 255, 255, 0.12);
  color: #f5f2ed;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  outline: none;

  &::placeholder {
    color: rgba(245, 242, 237, 0.6);
  }
`;

const SubmitButton = styled.button`
  padding: 0.9rem 2.4rem;
  border-radius: 999px;
  border: none;
  background: #f5f2ed;
  color: #1f1f1f;
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 25px rgba(0, 0, 0, 0.16);
  }
`;
