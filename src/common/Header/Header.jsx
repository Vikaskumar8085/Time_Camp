import { Container } from "@mui/material";
import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header_wrapper">
        <header>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="logo">
              <h1>Logo</h1>
            </div>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>{" "}
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/price">Price</NavLink>
                </li>{" "}
                <li>
                  <NavLink to="/About">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/login">login</NavLink>
                </li>
              </ul>
            </nav>
          </Container>
        </header>
      </div>
    </>
  );
}

export default Header;
