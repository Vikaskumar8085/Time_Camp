import React from "react";

function TButton({ onclick, children, arialabel, type, ...rest }) {
  return (
    <div className="btn-container">
      <button onClick={onclick} type={type} aria-label={arialabel} {...rest}>
        {children}
      </button>
    </div>
  );
}

export default TButton;
