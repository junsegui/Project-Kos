import React from "react";
import { useSelector } from "react-redux";
import { Routes as ReactDomRoutes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Login } from "../Login/Login";
import { Bag } from "../Bag/Bag";
import { Contact } from "../Contact/Contact";
import { Home } from "../Home/Home";
import { ProductItem } from "../Item/ProductItem";
import { Account } from "../Account/Account";

import { Shop } from "../Shop/Shop";
import { SignIn } from "../Sign In/SignIn";
import { ProtectedRoute } from "./ProtectedRoute";

export const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bag" element={<Bag />} />
      <Route path="/shop/:id" element={<ProductItem />} />
      <Route path="sign_in" element={<SignIn/>}/>
      <Route path="/account" element={<ProtectedRoute >
          <Account/>
      </ProtectedRoute>}/>
    </ReactDomRoutes>
  );
};
