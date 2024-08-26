import React from "react";
import { memo } from "react";
import "./profile.scss";
function ProfileComponent({ GetUserData }) {
  return (
    <>
      <div className="Profile_wrapper">
        <section>
          <img src={GetUserData?.message?.Photo} />
          <h1>FirstName :- {GetUserData?.message?.FirstName}</h1>
          <h1>LastName :- {GetUserData?.message?.LastName}</h1>
          <h1>Email :- {GetUserData?.message?.Email}</h1>
        </section>
      </div>
    </>
  );
}

export default memo(ProfileComponent);
