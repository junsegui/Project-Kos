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
        <Link to="/">
          {" "}
          <Logo src={kos} alt="logo" />
        </Link>
        <FontAwesomeIcon icon={faBagShopping} color="black" />
        <AnimatePresence>{visible && <ModalMenu />}</AnimatePresence>
      </Burguer>
      <DesktopNavbar>
        <Link to="/shop">shop</Link>
        <p>contact</p>
        <Link to="/">
          {" "}
          <Logo src={kos} alt="logo" />
        </Link>
        <p>account</p>
        <p>bag()</p>
      </DesktopNavbar>
    </>
  );
};
