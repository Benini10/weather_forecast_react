import { Container } from "react-bootstrap";
import NavBar from "./Navbar";

function Layout(props) {
  return (
    <div>
      <NavBar />
      <Container>{props.children}</Container>
    </div>
  );
}

export default Layout;
