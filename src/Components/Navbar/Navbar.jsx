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
import { Link, NavLink } from "react-router-dom";
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
        <StyledLink to="/shop">shop</StyledLink>
        <StyledLink to="/ourstory">our story</StyledLink>
        <StyledLogoLink to="/">
          <Logo src={kos} alt="logo" />
        </StyledLogoLink>
        <StyledLink to="/account">account</StyledLink>
        <StyledLink to="/bag">bag({totalItems})</StyledLink>
      </DesktopNavbar>
    </>
  );
};

const StyledLink = styled(NavLink)`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  text-decoration: none;
  color: #4d4b4a;
  transition: all 1s ease-in-out;
  font-weight: 700;
  &:hover {
    transform: scale(1.2);
  }
`;
const StyledLogoLink = styled(NavLink)`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StledFontAwesome = styled(FontAwesomeIcon)`
  width: 20%;
`;
