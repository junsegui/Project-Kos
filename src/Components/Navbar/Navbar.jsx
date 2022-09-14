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
import kos from "../../../public/assets/Logo/Mi proyecto.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const { visible } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <>
      <Burguer>
        <FontAwesomeIcon
          icon={faBars}
          color="black"
          onClick={() => {
            dispatch(toggleModal());
          }}
        />
        <StyledLink to="/">
          <Logo src={kos} alt="logo" />
        </StyledLink>
        <FontAwesomeIcon icon={faBagShopping} color="black" />
        <AnimatePresence>{visible && <ModalMenu />}</AnimatePresence>
      </Burguer>
      <DesktopNavbar>
        <Link to="/shop">shop</Link>
        <p>contact</p>
        <StyledLink to="/">
          <Logo src={kos} alt="logo" />
        </StyledLink>
        <p>account</p>
        <p>bag()</p>
      </DesktopNavbar>
    </>
  );
};

const StyledLink = styled(Link)`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
