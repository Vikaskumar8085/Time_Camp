// OurValues.js
import React from 'react';
import './OurValues.css'; // Import the CSS file for styling

const values = [
  {
    title: 'Customer-Centric Approach',
    description: 'At TimeCamp, our customers are at the heart of everything we do. We strive to understand and anticipate their needs, ensuring that our solutions not only meet but exceed their expectations. Our commitment is to provide exceptional service and support, always putting our users first.',
  },
  {
    title: 'Innovation and Excellence',
    description: 'We believe in pushing the boundaries of what’s possible. Our team is dedicated to continuous learning and improvement, embracing new technologies and methodologies to deliver cutting-edge solutions. Excellence is not just a goal but a standard we uphold in every project.',
  },
  {
    title: 'Integrity and Transparency',
    description: 'Honesty and transparency are the cornerstones of our business. We conduct our operations with the highest level of integrity, ensuring that our clients are fully informed and involved in the decision-making process. Trust is earned through openness and reliability.',
  },
  {
    title: 'Collaboration and Teamwork',
    description: 'Success is achieved through collective effort. We foster a collaborative environment where ideas are shared freely, and teamwork is encouraged. Our diverse team works together harmoniously to solve challenges and create innovative solutions.',
  },
  {
    title: 'Sustainability and Responsibility',
    description: 'We are committed to making a positive impact on our community and the environment. Our practices are designed to be sustainable, and we take our social responsibility seriously, striving to contribute positively to society through ethical practices and mindful resource use.',
  },
  {
    title: 'User Experience and Quality',
    description: 'Providing a seamless and enjoyable user experience is our priority. We focus on delivering high-quality products and services that are intuitive, reliable, and user-friendly. Our goal is to ensure that every interaction with TimeCamp is a positive one.',
  },
  // {
  //   title: 'Adaptability and Resilience',
  //   description: 'In a rapidly changing world, adaptability is crucial. We embrace change and remain resilient in the face of challenges, continuously evolving to meet the demands of our clients and the market. Our ability to adapt ensures that we stay ahead and remain relevant.',
  // },
];

const OurValues = () => {
  return (
    <section className="our-values">
      <h2>Our Values</h2>
      <div className="values-list">
        {values.map((value, index) => (
          <div key={index} className="value-card">
            <h3 className="value-title">{value.title}</h3>
            <p className="value-description">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
