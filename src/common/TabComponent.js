import React, { useState } from 'react';
import './TabComponent.css'; // Import the CSS for styling and animations

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-container">
      <div className="tab-header">
        <div
          className={`tab-button ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabChange(0)}
        >
          Tab 1
        </div>
        <div
          className={`tab-button ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabChange(1)}
        >
          Tab 2
        </div>
        <div
          className={`tab-button ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabChange(2)}
        >
          Tab 3
        </div>
      </div>
      <div className="tab-content">
        <div
          className={`tab-pane ${activeTab === 0 ? 'active' : ''}`}
        >
          <h2>Content for Tab 1</h2>
          <p>This is the content of the first tab.</p>
        </div>
        <div
          className={`tab-pane ${activeTab === 1 ? 'active' : ''}`}
        >
          <h2>Content for Tab 2</h2>
          <p>This is the content of the second tab.</p>
        </div>
        <div
          className={`tab-pane ${activeTab === 2 ? 'active' : ''}`}
        >
          <h2>Content for Tab 3</h2>
          <p>This is the content of the third tab.</p>
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
