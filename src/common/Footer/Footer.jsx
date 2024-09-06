import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  
  function handletop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      left: 0,
    });
  }

  return (
    <>
      <div className="footer_container">
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={3} xl={3}>
              <div className="footer_content">
                <div className="footer_heading">
                  <div className="footer_title">
                    <h1>Sotware</h1>
                  </div>
                </div>
                <div className="footer_links">
                  <ul>
                    <li>
                      <Link to="">Feature Overview</Link>
                    </li>
                    <li>
                      <Link to="">Solutions</Link>
                    </li>
                    <li>
                      <Link to="">Free time tracking app</Link>
                    </li>
                    <li>
                      <Link to="">integration</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} xl={3}>
              <div className="footer_content">
                <div className="footer_heading">
                  <div className="footer_title">
                    <h1>learning</h1>
                  </div>
                </div>
                <div className="footer_links">
                  <ul>
                    <li>
                      <Link to="">Feature Overview</Link>
                    </li>
                    <li>
                      <Link to="">Solutions</Link>
                    </li>
                    <li>
                      <Link to="">Free time tracking app</Link>
                    </li>
                    <li>
                      <Link to="">integration</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} xl={3}>
              <div className="footer_content">
                <div className="footer_heading">
                  <div className="footer_title">
                    <h1>Sotware</h1>
                  </div>
                </div>
                <div className="footer_links">
                  <ul>
                    <li>
                      <Link onClick={handletop} to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} xl={3}>
              <div className="footer_content">
                <div className="footer_heading">
                  <div className="footer_title">
                    <h1>Sotware</h1>
                  </div>
                </div>
                <div className="footer_links">
                  <ul>
                    <li>
                      <Link to="">Feature Overview</Link>
                    </li>
                    <li>
                      <Link to="">Solutions</Link>
                    </li>
                    <li>
                      <Link to="">Free time tracking app</Link>
                    </li>
                    <li>
                      <Link to="">integration</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <div className="footer-copyrights">
            <div className="copyright_box">
              <div className="copyright_content">
                <h1>
                  Copyright &copy; {new Date()?.getFullYear()} All Rights
                  Reserved
                </h1>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
