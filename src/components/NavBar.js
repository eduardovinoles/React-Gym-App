import { React, useState, useEffect } from 'react'
import { Container, Navbar, Nav, Offcanvas, Button } from 'react-bootstrap';
import { AttentionSeeker } from "react-awesome-reveal"
import WebFont from 'webfontloader'
import Login from './Login'
import { useNavigate } from 'react-router-dom'
import useToken from './useToken';

WebFont.load({
    google: {
        families: ["Lobster Two", "Black Ops One"]
    }
});

function NavBar(props) {

    const [loginModal, setShowLogin] = useState(false);
    const navigation = useNavigate();
    const { token, setToken } = useToken();
      
// delete before deploy 
    useEffect(() => {
  
      console.log(token)
       
      }, [token]);
////////////////////////      

    function goTo(name) {
        navigation(`/${name}`)
    }
    
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
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    style={{ width: "200px" }} >
                    <Offcanvas.Header closeButton>
                        <AttentionSeeker>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Black Dog Gym</Offcanvas.Title>
                        </AttentionSeeker>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Button className={!token ? "disabled" : "aside-navbar-button" } name='Users' onClick={(e) => { goTo(e.target.name) }}>USERS</Button>
                            <Button className="aside-navbar-button" name='ContactForm' onClick={(e) => { goTo(e.target.name) }}>JOIN</Button>
                            <Button className={!token ? "login-button" : "disabled" } onClick={(e) => { setShowLogin(true) }} >LOGIN</Button>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                <Login
                    setToken={setToken}
                    show={loginModal}
                    onHide={() => setShowLogin(false)}
                />
            </Container>
        </Navbar>
    )
}
export default NavBar
