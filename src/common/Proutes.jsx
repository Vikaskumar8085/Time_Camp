import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Proutes({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } 
  }, [0]);

  return <>{children}</>;
}

export default Proutes;
