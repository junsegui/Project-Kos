import styled from "styled-components";

export const DesktopNavbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 30;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: clamp(0.75rem, 2vw, 1.5rem) clamp(1.5rem, 6vw, 4rem);
  background: rgba(248, 246, 243, 0.92);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  transition: background 280ms ease, border-color 280ms ease, box-shadow 280ms ease;

  @supports (backdrop-filter: blur(18px)) {
    backdrop-filter: blur(18px);
    background: rgba(248, 246, 243, 0.82);
  }

  @media (max-width: 769px) {
    display: none;
  }

  &:hover {
    background: rgba(244, 241, 236, 0.95);
    border-color: rgba(0, 0, 0, 0.08);
    box-shadow: 0 20px 40px rgba(31, 31, 31, 0.08);
  }
`;
