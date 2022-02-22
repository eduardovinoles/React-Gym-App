import { Container, Navbar, Nav, Offcanvas, Button } from 'react-bootstrap';
import { AttentionSeeker } from "react-awesome-reveal"
import WebFont from 'webfontloader'

WebFont.load({
    google: {
        families: ["Lobster Two", "Black Ops One"]
    }
});

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="false" variant="dark" className="nav-logo style-navbar">
            <Container fluid className='m-1'>

                <Navbar.Brand href="/" style={{ marginTop: "5vh" }}>
                    <img className="logo-nav"
                        href="/"
                        src="./img/logo.png"
                        width="100"
                        height="100"
                        alt=""
                    />
                </Navbar.Brand>
                <Button variant="outline-success" href='/ContactForm' className="join-button">
                    <h3 className="join-button-h3">Join Us</h3>
                </Button>
                <Navbar.Toggle aria-controls="offcanvasNavbar"/>
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    style={{ width: "200px"}} >
                    <Offcanvas.Header closeButton>
                        <AttentionSeeker>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Black Dog Gym</Offcanvas.Title>
                        </AttentionSeeker>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href='/' className='nav-text'>HOME</Nav.Link>
                            <Nav.Link href='/ContactForm' className='nav-text' >JOIN</Nav.Link>
                            <Nav.Link href='/Users' className='nav-text'>USERS</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
export default NavBar
