import React from "react";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";

function SubLayout({children}) {
  return (
    <>
      <div className="dashboard_wrapper">
        <div className="dashboard_box">
          <Header />
          <main>
            <div className="content">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}

export default SubLayout;
