import React from "react";

function Card({ children }) {
  return (
    <>
      <div className="Card_Container">
        <div className="CardBox">{children}</div>
      </div>
    </>
  );
}

export default Card;
