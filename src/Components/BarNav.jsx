import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';


const BarNav = () => {
    return ( 
        <Navbar expand="lg" className='fixed-top nav_prin'>
            <Container className='navBar'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="#home" className="text-light">Quienes Somos</Nav.Link>
                    <Nav.Link href="#link" className="text-light">Beneficios</Nav.Link>
                    <Nav.Link href="#link" className="text-light">Cómo Funciona</Nav.Link>
                    <Nav.Link href="#link" className="text-light">Videollamadas</Nav.Link>
                    <Nav.Link href="#link" className="text-light">Blog</Nav.Link>
                    <Nav.Link href="#link" className="text-light">Comunidad</Nav.Link>
                    <Nav.Link href="#link" className="text-light">Regístrate</Nav.Link>
                    <Nav.Link href="#link" className="text-light"><span className="Rectangle">Iniciar Sesion</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default BarNav;