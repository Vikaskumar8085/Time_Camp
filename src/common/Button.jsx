import React from "react";

function Button({ onclick, children, arialabel }) {
  return (
    <>
      <div className="btn_wrapper">
        <button onClick={onclick} aria-label={arialabel}>
          {children}
        </button>
      </div>
    </>
  );
}

export default Button;
