// src/TestimonialsSection.js
import React from "react";
import "./Testimonial/TestimonialsSection.css"; // Import CSS for styling
import testimonialsData from "./Testimonial/testimonialsData";

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.testimonial}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-position">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
