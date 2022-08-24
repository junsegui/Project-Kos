import React from "react";
import styled from "styled-components";
import { NavbarWraper } from "./NavbarStyles/NavbarWraper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <NavbarWraper>
      <FontAwesomeIcon icon={faBars} color="black" />
      <Logo src="/Assets/Logo/Mi proyecto.png" alt="" />
      <FontAwesomeIcon icon={faBagShopping} color="black" />
    </NavbarWraper>
  );
};
