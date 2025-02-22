import React from "react";
import Place from "../Componets/Places/Place";
import OrderPopUp from "../Componets/OrderPopup/OrderPopUp";
import { useState } from "react";

const PlaceRoutes = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const toggle = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <div>
      <Place handleToggle={toggle} />
      <OrderPopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default PlaceRoutes;
