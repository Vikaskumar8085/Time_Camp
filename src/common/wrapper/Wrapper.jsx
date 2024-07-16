import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Wrapper({ children }) {
  return (
    <>
      <div className="wrapper">
        <Header />
        {children}
        <Footer/>
      </div>
    </>
  );
}

export default Wrapper;
