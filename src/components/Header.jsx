import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand href="/reactjs-router">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/home" className="me-2">
                Home
              </NavLink>
              <NavLink to="/features" className="me-2">
                Features
              </NavLink>
              <NavLink to="/pricing">Pricing</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
