import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { IoMdNotificationsOutline } from "react-icons/io";

function Header() {
  const GetUserData = useSelector((state) => state.auth.values);

  return (
    <header className="dash_header_wrapper">
      <div className="dash_header_box">
        <div className="head_logo">
          <img src="https://d2w2i7rp1a0wob.cloudfront.net/static/images/logos/KekaLogoBlack.svg" />
        </div>
        <div className="dash_header_profile">
          <div className="dash_header_notification">
            <Badge badgeContent={4} color="info">
              <IoMdNotificationsOutline className="icons" />
            </Badge>
          </div>

          <img src={GetUserData?.message?.Photo} alt="no-img" />
          <div className="dash_head_logout">
            <h2
              style={{ margin: "0px 5px", fontSize: "1em", fontWeight: "350" }}
            >
              {GetUserData?.message?.FirstName}
            </h2>
            <CiLogout
              onClick={() => {
                if (localStorage.getItem("token")) {
                  localStorage.clear();
                  window.location.href = "/login";
                } else {
                }
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
