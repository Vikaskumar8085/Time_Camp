import React, { useState } from "react";

const TabComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-container">
      <div className="tab-header">
        {tabs.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className={`tab-button ${activeTab === index ? "active" : ""}`}
                onClick={() => handleTabChange(index)}
              >
                {item.title}
              </div>
            </>
          );
        })}
      </div>
      <div className="tab-content">
        {tabs.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className={`tab-pane ${activeTab === index ? "active" : ""}`}
              >
                {item.content}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TabComponent;
