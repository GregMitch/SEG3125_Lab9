import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "/src/styles.css";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Container>
        <Navbar bg="dark" expand="sm">
          <Navbar.Brand href="/">Putrid Potatoes</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">
              <img src="./icons/bin.png" />
              Explore
            </Nav.Link>
            <Nav.Link href="/submit">
              <img src="./icons/send.png" />
              Submit
            </Nav.Link>
            <Nav.Link href="/faq">
              <img src="./icons/help.png" />
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
};

export default Navigation;
