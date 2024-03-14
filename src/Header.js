import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">NODE PROJECT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">POST Data</Nav.Link>
            <Nav.Link href="get">GET Data</Nav.Link>
            <Nav.Link href="put">PUT Data</Nav.Link>
            <Nav.Link href="delete">DELETE Data</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
  );
}

export default Header;