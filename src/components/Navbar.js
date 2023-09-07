import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'


function NavBar() {
  return (
    <Navbar className = 'nav'>
      <Container className = 'nav-style'>
        <Navbar.Collapse fluid style={{}}>
            <Navbar.Brand href="#HomePage" className={"pic-container"}>
              <img
                  src = {'/Stats_Portfolio_Logo.png'}
                  width="175"
                  height="175"
                  className="logo"
                  alt="Logo"
                  className="pic"
              />
            </Navbar.Brand>
          </Navbar.Collapse>

          <Navbar.Collapse fluid style={{}}>
            <Nav className="text">
              <Nav.Link href="#HomePage" className="link"> Home </Nav.Link>
              <Nav.Link href="#U1" className="link"> Unit 1 </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;