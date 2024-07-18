import React from "react";

function Button({ onclick, children, arialabel, type, ...rest }) {
  return (
    <>
      <div className="btn_wrapper">
        <button onClick={onclick} type={type} aria-label={arialabel} {...rest}>
          {children}
        </button>
      </div>
    </>
  );
}

export default Button;
