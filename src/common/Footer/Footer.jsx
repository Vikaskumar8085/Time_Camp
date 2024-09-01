import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Footer.scss"; // Import SCSS file

const Footer = () => (
  <Box component="footer" className="footer">
    <Container className="footer-container">
      <Grid container spacing={4}>
        {/* Company Info Section */}
        <Grid item xs={12} sm={6} md={4} className="footer-section">
          <Typography variant="h6" className="title">
            TimeCamp
          </Typography>
          <Typography variant="body2" className="text">
            Your company description goes here. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </Typography>
        </Grid>

        {/* Links Section */}
        <Grid item xs={12} sm={6} md={4} className="footer-section">
          <Typography variant="h6" className="title">
            Links
          </Typography>
          <ul className="links">
            <li>
              <Link to="/" variant="body2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" variant="body2">
                blog
              </Link>
            </li>
            <li>
              <Link to="/price">Price</Link>
            </li>
            <li>
              <Link to="/About" variant="body2">
                About
              </Link>
            </li>
            <li>
              <Link to="/term-and-condition">Term</Link>
            </li>
            <li>
              <Link to="/privacy-policy">privacy</Link>
            </li>
            <li>
              <Link to="/contact" variant="body2">
                Contact
              </Link>
            </li>
          </ul>
        </Grid>

        {/* Contact Info Section */}
        <Grid item xs={12} sm={6} md={4} className="footer-section">
          <Typography variant="h6" className="title">
            Contact Us
          </Typography>
          <Typography variant="body2" className="text">
            1234 Main St
            <br />
            City, State, 12345
            <br />
            Email:{" "}
            <a href="mailto:contact@yourcompany.com">contact@yourcompany.com</a>
            <br />
            Phone: (123) 456-7890
          </Typography>
        </Grid>
      </Grid>
    </Container>
    <Container>
      <div className="footer-copyrights">
        <div className="copyright_box">
          <div className="copyright_content">
            <h1>
              Copyright &copy; {new Date()?.getFullYear()} All Rights Reserved
            </h1>
          </div>
        </div>
      </div>
    </Container>
  </Box>
);

export default Footer;
