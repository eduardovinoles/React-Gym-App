import { Container, Navbar, Nav } from 'react-bootstrap';



function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" className='nav-logo'>
            <Container fluid className='m-1'>

                <Navbar.Brand href="/" style={{ color: "black" }}>
                    <img
                        href="/"
                        src="./img/logo.png"
                        width="100"
                        height="100"
                        alt=""
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href='/' className='nav-text'>HOME</Nav.Link>
                        <Nav.Link href='/Tasks' className='nav-text' >TASKS</Nav.Link>
                        <Nav.Link href='/Posts' className='nav-text'>USERS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar