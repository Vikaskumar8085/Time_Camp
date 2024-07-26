import React from "react";

function Header(GetUserData) {
  return (
    <header className="header_wrapper">
      <div className="header_box">
        <div className="head_logo">
          <img src="https://d2w2i7rp1a0wob.cloudfront.net/static/images/logos/KekaLogoBlack.svg" />
        </div>
        <div className="head_profile">
          <img src="https://i.ibb.co/4pDNDk1/avatar.png" />
          <p>Admin</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
