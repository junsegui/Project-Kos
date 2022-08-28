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
import Kos from "../../assets/Logo/Mi proyecto.png";
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
        <img src={Kos} alt="logo" />
        <FontAwesomeIcon icon={faBagShopping} color="black" />
        <AnimatePresence>{visible && <ModalMenu />}</AnimatePresence>
      </Burguer>
      <DesktopNavbar>
        <p>Shop</p>
        <p>contact</p>
        <img src={Kos} alt="" />
        <p>account</p>
        <p>bag()</p>
      </DesktopNavbar>
    </>
  );
};
