// src/TeamSection.js
import React from "react";
import "./aboutstyle/TeamSection.css"; // Import CSS for styling
import teamData from "./teamData";

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <div className="team-container">
        {teamData.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team_member_content">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-position">{member.position}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
