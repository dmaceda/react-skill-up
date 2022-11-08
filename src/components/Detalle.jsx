import React from "react";
import { useNavigate } from "react-router-dom";

const Detalle = () => {
  let token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <>
      {!token && navigate("/")}
      <h2>Detalle</h2>
    </>
  );
};

export default Detalle;
