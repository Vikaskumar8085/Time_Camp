import { Container } from "@mui/material";
import React from "react";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const Icons = isNavOpen ? <IoMdClose /> : <CiMenuFries />;
  const NavbarHandler = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="header_wrapper">
        <Container>
          <header>
            <div className="logo">
              <h1>Logo</h1>
            </div>
            <div className="header_icon">
              <span onClick={NavbarHandler}>{Icons}</span>
            </div>

            <nav className={isNavOpen ? "Navbar" : ""}>
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
