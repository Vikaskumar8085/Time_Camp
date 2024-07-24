import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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
                  <Link to="/">Home</Link>
                </li>{" "}
                <li>
                  <Link to="/blog">Blog</Link>
                </li>{" "}
                <li>
                  <Link to="/contact">Contact</Link>
                </li>{" "}
              </ul>
            </nav>
          </Container>
        </header>
      </div>
    </>
  );
}

export default Header;
