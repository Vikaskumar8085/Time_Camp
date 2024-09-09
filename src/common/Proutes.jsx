import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Proutes({ children }) {
  const navigate = useNavigate();
  const [IsCompany, setIsCompany] = React.useState(false);

  useEffect(() => {
    if (IsCompany === true) {
      window.location.href = "/company";
    }
  }, [0]);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [0]);

  return <>{children}</>;
}

export default Proutes;
