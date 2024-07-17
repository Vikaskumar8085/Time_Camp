import React, { Children } from "react";
import Header from "./component/Header";
import Navigation from "./component/Navigation";
import Sidebar from "./component/Sidebar";

function Layout({ children }) {
  return (
    <>
      <div className="dashboard_wrapper">
        <Header />
        <div className="dashboard_box">
          <Sidebar />
          <main>
            <Navigation />
            <div className="content">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Layout;
