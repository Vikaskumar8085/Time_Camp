import React from "react";
import { ScaleLoader } from "react-spinners";

function Loader() {
  return (
    <div className="Loader_container">
      <div className="Loader_row">
        <div className="loader_content">
          <ScaleLoader color="#ffffff" />
        </div>
      </div>
    </div>
  );
}

export default Loader;
