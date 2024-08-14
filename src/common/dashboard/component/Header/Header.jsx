import React from "react";
import Image from "../../../Image/Image";
import { useSelector } from "react-redux";

function Header() {
  const GetUserData = useSelector((state) => state.auth.values);

  return (
    <header className="header_wrapper">
      <div className="header_box">
        <div className="head_logo">
          <img src="https://d2w2i7rp1a0wob.cloudfront.net/static/images/logos/KekaLogoBlack.svg" />
        </div>
        <div className="head_profile">
          <img src={GetUserData?.message?.Photo} alt="no-img" />
          <button
            onClick={() => {
              if (localStorage.getItem("token")) {
                localStorage.clear();
                window.location.href = "/login";
              } else {
              }
            }}
          >
            logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
