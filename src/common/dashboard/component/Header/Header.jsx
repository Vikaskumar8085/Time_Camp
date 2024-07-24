import React from "react";

function Header(GetUserData) {
  console.log(GetUserData, "header");
  return (
    <div className="header">
      <div className="header_logo">
        <h4>logo</h4>
      </div>
      <header>
        <div className="head">
          <div className="head_logo"></div>
          <div className="head_profile">
            <img src="" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
