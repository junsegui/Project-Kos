import React from "react";
import styled, { keyframes } from "styled-components";
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
  { label: "Years crafting", value: "08" },
  { label: "Unique pieces", value: "350+" },
  { label: "Local partners", value: "24" },
];

export const Home = () => {
  return (
    <Main>
      <Hero>
        <HeroLayout>
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
          <HeroFigure>
            <HeroImage
              src="https://images.unsplash.com/photo-1616628188505-404cc2a255a0?auto=format&fit=crop&w=960&q=80"
              alt="Handcrafted vase on a wooden table"
            />
            <HeroBadge>Small batch glazing</HeroBadge>
            <HeroCaption>
              Each firing blends mineral-rich pigments for tonal depth unique to every piece.
            </HeroCaption>
          </HeroFigure>
        </HeroLayout>
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

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const floatPulse = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0);
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0;
  background: linear-gradient(180deg, #f7f3ed 0%, #fcfaf7 45%, #f5f0e8 100%);
  color: #1f1f1f;
  font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
`;

const Hero = styled.section`
  position: relative;
  padding: clamp(4.5rem, 9vw, 7.5rem) clamp(1.75rem, 7vw, 5.5rem);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    width: min(1080px, 100%);
    height: 100%;
    border-radius: clamp(1.75rem, 4vw, 3.5rem);
    background: linear-gradient(135deg, rgba(246, 240, 233, 0.92), rgba(255, 255, 255, 0.82));
    box-shadow: 0 55px 110px rgba(31, 31, 31, 0.12);
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    width: clamp(220px, 32vw, 420px);
    height: clamp(220px, 32vw, 420px);
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.85), rgba(176, 155, 132, 0.2));
    filter: blur(0px);
    top: -12%;
    right: -8%;
    opacity: 0.7;
    z-index: 0;
  }
`;

const HeroLayout = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: clamp(2.5rem, 6vw, 4.5rem);
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) minmax(260px, 420px);
    align-items: center;
  }
`;

const HeroContent = styled.div`
  max-width: 640px;
  display: grid;
  gap: 1.75rem;
  animation: ${fadeInUp} 640ms ease forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
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
  line-height: 1.75;
  color: rgba(31, 31, 31, 0.68);
  max-width: 520px;
`;

const CtaGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  padding: 0.95rem 2.6rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #1f1f1f, #3a3228);
  color: #f6f4f1;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 600;
  transition: transform 240ms ease, box-shadow 240ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 22px 38px rgba(17, 17, 17, 0.24);
  }

  &:focus-visible {
    outline: 2px solid rgba(31, 31, 31, 0.85);
    outline-offset: 3px;
  }
`;

const SecondaryLink = styled(Link)`
  position: relative;
  font-size: 0.9rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #1f1f1f;
  text-decoration: none;
  padding: 0.85rem 1.6rem;
  border-radius: 999px;
  border: 1px solid rgba(31, 31, 31, 0.12);
  background: rgba(255, 255, 255, 0.4);
  transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(31, 31, 31, 0.28);
    box-shadow: 0 16px 32px rgba(17, 17, 17, 0.12);
  }

  &:focus-visible {
    outline: 2px solid rgba(31, 31, 31, 0.85);
    outline-offset: 3px;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const Stat = styled.div`
  position: relative;
  display: grid;
  gap: 0.35rem;
  padding: 1rem 1.25rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(31, 31, 31, 0.08);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
  animation: ${fadeInUp} 680ms ease forwards;
  animation-delay: 120ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const StatValue = styled.span`
  font-size: 1.85rem;
  font-weight: 600;
  color: #1f1f1f;
`;

const StatLabel = styled.span`
  font-size: 0.8rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(31, 31, 31, 0.55);
  line-height: 1.4;
  word-break: break-word;
`;

const HighlightsSection = styled.section`
  margin: clamp(3rem, 7vw, 5rem) clamp(1.75rem, 6vw, 5rem);
  display: grid;
  gap: clamp(1.25rem, 2.5vw, 2rem);
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

const HighlightCard = styled.article`
  padding: clamp(1.6rem, 3vw, 2.4rem);
  border-radius: 26px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(244, 240, 235, 0.82));
  border: 1px solid rgba(31, 31, 31, 0.06);
  box-shadow: 0 22px 45px rgba(31, 31, 31, 0.08);
  display: grid;
  gap: 0.9rem;
  transition: transform 240ms ease, box-shadow 240ms ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 32px 60px rgba(31, 31, 31, 0.14);
  }
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
  color: rgba(31, 31, 31, 0.64);
`;

const QuoteSection = styled.section`
  position: relative;
  margin: clamp(2.5rem, 7vw, 4.5rem) clamp(1.75rem, 6vw, 5rem);
  border-radius: 36px;
  background: linear-gradient(135deg, rgba(31, 31, 31, 0.9), rgba(58, 50, 40, 0.85));
  padding: clamp(3.25rem, 8vw, 5.5rem);
  display: flex;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.15), transparent 60%);
  }
`;

const Quote = styled.blockquote`
  position: relative;
  margin: 0;
  max-width: 720px;
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-style: italic;
  color: rgba(246, 241, 234, 0.92);
  text-align: center;
  line-height: 1.7;
  letter-spacing: 0.01em;
`;

const NewsletterSection = styled.section`
  margin: clamp(4rem, 10vw, 7rem) clamp(1.75rem, 6vw, 5rem) clamp(5rem, 11vw, 9rem);
  padding: clamp(2.75rem, 6vw, 4.75rem);
  background: linear-gradient(135deg, #1f1f1f, #3a3127);
  border-radius: 36px;
  display: grid;
  gap: clamp(1.75rem, 4vw, 2.5rem);
  color: #f5f2ed;
  box-shadow: 0 35px 70px rgba(31, 31, 31, 0.25);

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
  gap: 0.85rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 1rem 1.4rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.16);
  color: #f5f2ed;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  outline: none;
  transition: border-color 220ms ease, background 220ms ease;

  &::placeholder {
    color: rgba(245, 242, 237, 0.6);
  }

  &:focus-visible {
    border-color: rgba(255, 255, 255, 0.68);
    background: rgba(255, 255, 255, 0.24);
  }
`;

const SubmitButton = styled.button`
  padding: 0.95rem 2.6rem;
  border-radius: 999px;
  border: none;
  background: #f5f2ed;
  color: #1f1f1f;
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  transition: transform 220ms ease, box-shadow 220ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 24px 35px rgba(0, 0, 0, 0.18);
  }

  &:focus-visible {
    outline: 2px solid rgba(17, 17, 17, 0.8);
    outline-offset: 3px;
  }
`;

const HeroFigure = styled.div`
  position: relative;
  display: grid;
  gap: 1.25rem;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border-radius: clamp(1.5rem, 3vw, 2.5rem);
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(31, 31, 31, 0.05);
  box-shadow: 0 28px 55px rgba(31, 31, 31, 0.16);
  animation: ${floatPulse} 7.5s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: clamp(1.25rem, 3vw, 2rem);
  object-fit: cover;
  box-shadow: 0 18px 35px rgba(31, 31, 31, 0.18);
`;

const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 0.5rem 1.3rem;
  border-radius: 999px;
  background: rgba(31, 31, 31, 0.9);
  color: #f6f3ee;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

const HeroCaption = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(31, 31, 31, 0.6);
`;
