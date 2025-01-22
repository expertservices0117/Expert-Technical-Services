import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./index.css"

function BasicExample() {
  return (
    <div className='nav-bg py-2'>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home" className='d-flex align-items-center gap-2'>
              <img src='/logo.jpeg' alt='logo' className='logo-img' />
              <p className='m-0 nav-logo-text'>
                Expert <br/> Technical Services
              </p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border: "none",outline: "none"}} />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto gap-3">
                <a href="#services" className='nav-item text-uppercase'>Our Services</a>
                <a href="#about" className='nav-item text-uppercase'>About</a>
                <a href="#footer" className='nav-item text-uppercase'>Contact Us</a>
              </Nav>
            </Navbar.Collapse>
            <div className='d-none d-lg-flex align-items-center gap-3'>
                <a href="tel:6281355853" className='number'>
                    <button className="btn btn-dark">
                      6281355853
                    </button>
                </a>
                <img src='/24-hours-support.png' className='animate__animated animate__swing animate__infinite' style={{ animationDuration: '2s', animationDelay: '1s' }}  alt='24/7' height={40} />
            </div>
          </Container>
        </Navbar>
    </div>
  );
}

export default BasicExample;