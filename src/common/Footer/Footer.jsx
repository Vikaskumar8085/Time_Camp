import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import './Footer.scss'; // Import SCSS file

const Footer = () => (
  <Box component="footer" className="footer">
    <Container className="footer-container">
      <Grid container spacing={4}>
        {/* Company Info Section */}
        <Grid item xs={12} sm={6} md={4} className="footer-section">
          <Typography variant="h6" className="title">
            Company Name
          </Typography>
          <Typography variant="body2" className="text">
            Your company description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        
        {/* Links Section */}
        <Grid item xs={12} sm={6} md={4} className="footer-section">
          <Typography variant="h6" className="title">
            Links
          </Typography>
          <ul className="links">
            <li>
              <Link href="#" variant="body2">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" variant="body2">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" variant="body2">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" variant="body2">
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
            Email: <a href="mailto:contact@yourcompany.com">contact@yourcompany.com</a>
            <br />
            Phone: (123) 456-7890
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Footer;

