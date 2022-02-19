import { Container, Navbar, Nav, Offcanvas, NavDropdown, Button } from 'react-bootstrap';
import { AttentionSeeker} from "react-awesome-reveal"
import WebFont from 'webfontloader'


WebFont.load({
    google: {
        families: ["Lobster Two", "Black Ops One"]
    }
});

function NavBar() {
    return (
        <Navbar  collapseOnSelect expand="false" variant="light" className='nav-logo' style={{ backgroundColor: "chartreuse", position: "sticky", top:0, zIndex:1 }}>
            <Container fluid className='m-1'>

                <Navbar.Brand href="/" style={{ color: "black", zIndex: 1, marginTop: "5vh" }}>
                    <img style={{ position: "absolute", marginTop: "-5vh",width:"5rem", height: "auto" }}
                        href="/"
                        src="./img/logo.png"
                        width="100"
                        height="100"
                        alt=""
                    />
                </Navbar.Brand>
                <Button variant="outline-success" style={{ width: "11vw",fontFamily:"Black Ops One" }}><h3 style={{margin:0,fontSize:"2vw"}}>Join Us</h3></Button>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />

                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    style={{ width: "200px",fontFamily:"Black Ops One" }}
                >
                    <Offcanvas.Header closeButton>
                        <AttentionSeeker>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Black Dog Gym</Offcanvas.Title>
                        </AttentionSeeker>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href='/' className='nav-text'>HOME</Nav.Link>
                            <Nav.Link href='/Tasks' className='nav-text' >TASKS</Nav.Link>
                            <Nav.Link href='/Users' className='nav-text'>USERS</Nav.Link>
                            <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Else 
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
export default NavBar