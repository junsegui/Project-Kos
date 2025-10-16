import React from "react";
import styled from "styled-components";
import { Burguer } from "./NavbarStyles/Burguer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "./Logo";
import { ModalMenu } from "./Modal/ModalMenu";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../Redux/Modal/actionModal";
import { AnimatePresence } from "framer-motion";
import { DesktopNavbar } from "./NavbarStyles/DesktopNavbar";
import kos from "../../assets/Logo/Mi proyecto.png";
import { NavLink } from "react-router-dom";
import { togglleVisibleCart } from "../../Redux/Bag/actionBag";
import { BagModal } from "./Modal/BagModal";
export const Navbar = () => {
  const { visible } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const { items,visible:bag } = useSelector((state) => state.bag);


  const totalItems = items.reduce((acc, item) => (acc += item.quantity), 0);
  return (
    <>
      <Burguer>
        <StledFontAwesome
          icon={faBars}
          color="black"
          onClick={() => {
            dispatch(toggleModal());
          }}
        />
        <StyledLogoLink to="/">
          <Logo src={kos} alt="logo" />
        </StyledLogoLink>
        <StledFontAwesome icon={faBagShopping} color="black" onClick={()=>dispatch(togglleVisibleCart())} />
        <AnimatePresence>{visible && <ModalMenu />}</AnimatePresence>
        <AnimatePresence>{bag && <BagModal />}</AnimatePresence>
      </Burguer>
      <DesktopNavbar>
        <NavContent>
          <NavGroup $align="flex-end">
            <StyledLink to="/shop">Shop</StyledLink>
            <StyledLink to="/ourstory">Our Story</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
          </NavGroup>
          <StyledLogoLink to="/">
            <Logo src={kos} alt="logo" />
          </StyledLogoLink>
          <NavGroup $align="flex-start">
            <StyledLink to="/account">Account</StyledLink>
            <BagTrigger
              type="button"
              onClick={() => dispatch(togglleVisibleCart())}
              aria-label={`Open bag with ${totalItems} item${totalItems === 1 ? "" : "s"}`}
            >
              Bag
              <Badge aria-hidden>{totalItems}</Badge>
            </BagTrigger>
          </NavGroup>
        </NavContent>
      </DesktopNavbar>
    </>
  );
};

const NavContent = styled.div`
  width: min(1180px, 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(1rem, 3vw, 2.5rem);
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ $align = "center" }) => $align};
  gap: clamp(1.25rem, 3vw, 2.75rem);
  flex-wrap: nowrap;
`;

const StyledLink = styled(NavLink)`
  position: relative;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-decoration: none;
  color: #1f1f1f;
  text-transform: none;
  transition: color 220ms ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.35rem;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, rgba(31, 31, 31, 0.82), rgba(31, 31, 31, 0));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 240ms ease;
  }

  &:hover,
  &[aria-current="page"] {
    color: #111111;
  }

  &:hover::after,
  &[aria-current="page"]::after {
    transform: scaleX(1);
  }
`;

const StyledLogoLink = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.35rem;
  border-radius: 50%;
  transition: transform 220ms ease, box-shadow 220ms ease;

  &:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 16px 28px rgba(0, 0, 0, 0.12);
  }
`;

const BagTrigger = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.75rem 1.35rem;
  border-radius: 999px;
  border: 1px solid rgba(31, 31, 31, 0.12);
  background: linear-gradient(135deg, #ffffff, #f1eeea);
  color: #1f1f1f;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  cursor: pointer;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 32px rgba(31, 31, 31, 0.12);
    border-color: rgba(31, 31, 31, 0.18);
  }

  &:focus-visible {
    outline: 2px solid #2b261f;
    outline-offset: 2px;
  }
`;

const Badge = styled.span`
  min-width: 1.75rem;
  height: 1.75rem;
  border-radius: 999px;
  background: #1f1f1f;
  color: #f7f4f0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
`;

const StledFontAwesome = styled(FontAwesomeIcon)`
  width: 20%;
`;
