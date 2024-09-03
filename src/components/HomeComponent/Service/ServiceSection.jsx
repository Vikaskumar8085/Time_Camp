// ServiceSection.js
import { Container } from "@mui/system";
import React from "react";
import "./ServiceSection.css"; // Import the CSS file for styling

const services = [
  {
    title: "Web Design",
    description:
      "Creative web designer with a flair for innovative and user-centric designs. Proficient in HTML, CSS, and UI/UX principles.",
  },
  {
    title: "Front End Developer",
    description:
      "Frontend developer crafting engaging user interfaces with React.js and Redux toolkit. Passionate about creating seamless digital experiences.",
  },
  {
    title: "Backend Developer",
    description:
      "Backend developer creating server-side logic, databases, and APIs. Proficient in optimizing performance and ensuring seamless interactions between the server and frontend.",
  },
  {
    title: "Flexible & Secure API Design",
    description:
      "Crafting flexible and secure API designs, ensuring seamless data exchange while prioritizing robust security measures for reliable and scalable interactions.",
  },
  {
    title: "Third Party API Integration",
    description:
      "Seamless integration of third-party APIs for enhanced functionality, enriching applications with external services and expanding features efficiently and effectively.",
  },
  {
    title: "Performance Optimization",
    description:
      "Performance optimization involves refining code and system components to enhance speed, responsiveness, and overall efficiency, ensuring optimal user experiences.",
  },
];

const ServiceSection = () => {
  return (
    <Container>
      <section className="service-section">
        <h2>Our Services</h2>
        <div className="service-list">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">no-img</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default ServiceSection;
