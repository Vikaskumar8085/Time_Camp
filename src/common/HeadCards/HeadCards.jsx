import React from "react";

function HeadCards({ image, headTitle, headCount }) {
  return (
    <>
      <div className="dashboard_count">
        <div className="active-one active">
          <div className="logo">
            <img src={image} alt="" srcset="" />
          </div>
          <div className="active_content">
            <h1>{headTitle}</h1>
            <p>{headCount}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadCards;
