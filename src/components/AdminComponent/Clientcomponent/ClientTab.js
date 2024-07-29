import React, { useState } from "react";
import "./Clienttab.css";

function ClientTab({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="tab-container">
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <div key={index} onClick={() => handleTabChange(index)}>
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane ${activeTab === index ? "active" : ""}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientTab;
