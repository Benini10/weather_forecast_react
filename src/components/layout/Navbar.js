import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>React APP</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/weather">Weather</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
