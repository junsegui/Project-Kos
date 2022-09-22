import React from "react";
import { Routes as ReactDomRoutes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Account } from "../Account/Account";
import { Bag } from "../Bag/Bag";
import { Contact } from "../Contact/Contact";
import { Home } from "../Home/Home";
import { Shop } from "../Shop/Shop";

export const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/account" element={<Account/>}/>
      <Route path="/bag" element={<Bag/>}/>
    </ReactDomRoutes>
  );
};
