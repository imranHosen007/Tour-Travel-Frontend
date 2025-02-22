import React from "react";
import Navbar from "../Componets/Navbar/Navbar";
import Footer from "../Componets/Footer/Footer";
import { Outlet } from "react-router-dom";
import OrderPopUp from "../Componets/OrderPopup/OrderPopUp";
import { useState } from "react";

const Layout = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const toggle = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <div className="pt-10">
      <Navbar handleToggle={toggle} />
      <Outlet />
      <Footer />
      <OrderPopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default Layout;
