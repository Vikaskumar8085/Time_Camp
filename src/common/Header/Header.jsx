import { Container } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header_wrapper">
        <Container>
          <header>
            <div className="logo">
              <h1>Logo</h1>
            </div>
            <nav className="Navbar">
              <NavLink
                className={({ isActive }) => (isActive ? "Navbaractive" : "")}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "Navbaractive" : "")}
                to="/blog"
              >
                Blog
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "Navbaractive" : "")}
                to="/price"
              >
                Price
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "Navbaractive" : "")}
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "Navbaractive" : "")}
                to="/contact"
              >
                contact
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "Navbaractive" : "")}
                to="/login"
              >
                Login
              </NavLink>
            </nav>
          </header>
        </Container>
      </div>
    </>
  );
}

export default Header;
