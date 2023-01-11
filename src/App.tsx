import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react
function App() {

  return (
    <div>
      <div className="App">
        <h1>Curtis Kan</h1>
      </div>
      <div className="Navbar">
        {/* https://react-bootstrap.github.io/components/navbar/ */}
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">LeCitrus</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#aboutme">About me</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#hobbies">Hobbies</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default App;
