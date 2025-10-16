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

  const getVisibleSlides = React.useCallback(() => {
    if (typeof window === "undefined") {
      return 1;
    }

    if (window.innerWidth >= 1280) {
      return 3;
    }

    if (window.innerWidth >= 920) {
      return 2;
    }

    return 1;
  }, []);

  const [visibleSlides, setVisibleSlides] = React.useState(getVisibleSlides);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [transitionEnabled, setTransitionEnabled] = React.useState(false);
  const trackRef = React.useRef(null);

  React.useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
    };

    handleResize();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [getVisibleSlides]);

  const clonesCount = React.useMemo(() => {
    return entries.length > 1 ? Math.min(entries.length, 2) : 0;
  }, [entries.length]);

  const slides = React.useMemo(() => {
    if (entries.length === 0) {
      return [];
    }

    if (entries.length === 1) {
      return entries;
    }

    const prefix = entries.slice(-clonesCount);
    const suffix = entries.slice(0, clonesCount);
    return [...prefix, ...entries, ...suffix];
  }, [entries, clonesCount]);

  React.useEffect(() => {
    if (!entries.length) {
      return;
    }

    setTransitionEnabled(false);
    setCurrentIndex(clonesCount || 0);
  }, [entries.length, clonesCount]);

  React.useEffect(() => {
    if (!transitionEnabled) {
      const id = requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });

      return () => cancelAnimationFrame(id);
    }

    return undefined;
  }, [transitionEnabled]);

  React.useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return undefined;
    }

    const handleTransitionEnd = () => {
      setIsAnimating(false);

      if (entries.length <= 1) {
        return;
      }

      if (currentIndex >= entries.length + clonesCount) {
        setTransitionEnabled(false);
        setCurrentIndex(clonesCount);
      } else if (currentIndex < clonesCount) {
        setTransitionEnabled(false);
        setCurrentIndex(entries.length + clonesCount - 1);
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      track.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex, entries.length, clonesCount]);

  const handleNavigate = (category) => {
    dispatch(selectedCategorie(category));
    navigate("/shop");
  };

  const handleNext = () => {
    if (isAnimating || entries.length <= 1) {
      return;
    }

    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isAnimating || entries.length <= 1) {
      return;
    }

    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
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
      <Carousel>
        <CarouselViewport>
          <CarouselTrack
            ref={trackRef}
            style={{ "--visible": Math.max(1, visibleSlides) }}
            $index={currentIndex}
            $transition={transitionEnabled}
          >
            {slides.map((category, index) => {
              const visual =
                visualsByCategory[category.categorie] ?? {
                  description: "Explore our curated selection of timeless ceramics.",
                };

              return (
                <Slide key={`${category.id}-${index}`}>
                  <Card onClick={() => handleNavigate(category.categorie)}>
                    <CardImage $image={visual.image} />
                    <CardBody>
                      <CardTitle>{category.categorie}</CardTitle>
                      <CardDescription>{visual.description}</CardDescription>
                      <CardLink>
                        shop the edit
                        <ArrowMark aria-hidden />
                      </CardLink>
                    </CardBody>
                  </Card>
                </Slide>
              );
            })}
          </CarouselTrack>
        </CarouselViewport>
        <CarouselControls>
          <ArrowButton type="button" data-direction="prev" onClick={handlePrev}>
            <VisuallyHidden>Previous collection</VisuallyHidden>
          </ArrowButton>
          <ArrowButton type="button" data-direction="next" onClick={handleNext}>
            <VisuallyHidden>Next collection</VisuallyHidden>
          </ArrowButton>
        </CarouselControls>
      </Carousel>
    </Section>
  );
};

const Section = styled.section`
  margin: clamp(3.5rem, 9vw, 7rem) clamp(1.75rem, 6vw, 5rem);
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

const Carousel = styled.div`
  position: relative;
  display: grid;
  gap: clamp(1.5rem, 4vw, 2.5rem);
`;

const CarouselViewport = styled.div`
  overflow: hidden;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(31, 31, 31, 0.05);
  box-shadow: 0 30px 60px rgba(31, 31, 31, 0.12);
  padding: clamp(1.2rem, 3vw, 2rem) 0;
`;

const CarouselTrack = styled.div`
  display: flex;
  width: fit-content;
  transform: ${({ $index }) => `translate3d(calc(-1 * ${$index} * (100% / var(--visible))), 0, 0)`};
  transition: ${({ $transition }) => ($transition ? "transform 540ms cubic-bezier(0.6, 0.1, 0.2, 1)" : "none")};
  will-change: transform;
`;

const Slide = styled.div`
  flex: 0 0 calc(100% / var(--visible));
  padding: 0 clamp(0.75rem, 2vw, 1.25rem);
  box-sizing: border-box;
`;

const Card = styled.button`
  width: 100%;
  border: none;
  text-align: left;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.98), rgba(244, 240, 235, 0.78));
  border-radius: 28px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: 0 24px 45px rgba(31, 31, 31, 0.12);
  transition: transform 280ms ease, box-shadow 280ms ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 34px 70px rgba(31, 31, 31, 0.18);
  }

  &:focus-visible {
    outline: 2px solid rgba(31, 31, 31, 0.4);
    outline-offset: 3px;
  }
`;

const CardImage = styled.div`
  position: relative;
  width: 100%;
  padding-top: 70%;
  border-radius: 28px 28px 0 0;
  overflow: hidden;
  background-color: #f3f1ed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 320ms ease;
  ${({ $image }) =>
    $image
      ? `background-image: linear-gradient(rgba(17, 17, 17, 0.08), rgba(17, 17, 17, 0.08)), url(${$image});`
      : ""};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.32), transparent 60%);
    opacity: 0;
    transition: opacity 280ms ease;
  }

  ${Card}:hover & {
    transform: scale(1.02);
  }

  ${Card}:hover &::after {
    opacity: 1;
  }
`;

const CardBody = styled.div`
  padding: clamp(1.75rem, 3.5vw, 2.35rem) clamp(1.6rem, 3vw, 2.1rem) clamp(2rem, 3.5vw, 2.6rem);
  display: grid;
  gap: 0.85rem;
`;

const CardTitle = styled.h3`
  text-transform: capitalize;
  margin: 0;
  font-size: 1.28rem;
  font-weight: 600;
  color: #1f1f1f;
`;

const CardDescription = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(31, 31, 31, 0.65);
`;

const CardLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #1f1f1f;
`;

const ArrowMark = styled.span`
  display: inline-block;
  width: 0.65rem;
  height: 0.65rem;
  border-top: 1px solid currentColor;
  border-right: 1px solid currentColor;
  transform: rotate(45deg);
  transition: transform 200ms ease;

  ${Card}:hover & {
    transform: translateX(4px) rotate(45deg);
  }
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`;

const ArrowButton = styled.button`
  position: relative;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  border: 1px solid rgba(31, 31, 31, 0.18);
  background: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    width: 0.75rem;
    height: 0.75rem;
    border-top: 2px solid rgba(31, 31, 31, 0.8);
    border-right: 2px solid rgba(31, 31, 31, 0.8);
    transform: ${(props) =>
      props["data-direction"] === "prev" ? "rotate(-135deg)" : "rotate(45deg)"};
  }

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(31, 31, 31, 0.32);
    box-shadow: 0 14px 26px rgba(31, 31, 31, 0.16);
  }

  &:focus-visible {
    outline: 2px solid rgba(31, 31, 31, 0.5);
    outline-offset: 3px;
  }
`;

const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
