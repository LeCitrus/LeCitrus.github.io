import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';

const NavBar = () => {
{/* https://react-bootstrap.github.io/components/navbar/ */}
return (
<Navbar bg="light" expand="lg">
<Container>
  <Navbar.Brand as={Link} to="/">LeCitrus</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link as={Link} to="/about-me">About me</Nav.Link>
    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
    <Nav.Link as={Link} to="/hobbies">Hobbies</Nav.Link>
  </Nav>
</Container>
</Navbar>
);
}

export default NavBar;