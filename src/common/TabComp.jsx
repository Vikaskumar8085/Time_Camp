import React, { useState } from "react";

function TabComp({ Tabsheader, TabsBody }) {
  const [isState, setisState] = useState(0);
  const handleclick = (prev) => {
    setisState(prev);
  };

  const titletabs = Tabsheader.map((item, index) => {
    return (
      <section className="Tabs_box">
        <div
          className={"Tabs_head"}
          key={index}
          onClick={() => handleclick(index)}
        >
          <h1 className={`Tabs_title ${isState === index ? "active" : ""}`}>
            {item.title}
          </h1>
        </div>
      </section>
    );
  });

  const tbody = TabsBody.map((item, index) => {
    return (
      <div className="TabsBody">
        {isState === index ? <div>{item.content}</div> : ""}
      </div>
    );
  });

  return (
    <>
      <div className="Tabs_container">{titletabs}</div>
      <div className="Tabsbody_wrapper">{tbody}</div>
    </>
  );
}

export default TabComp;
