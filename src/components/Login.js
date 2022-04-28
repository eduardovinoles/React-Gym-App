import { React, useEffect, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types';

function Login(props) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const credentials = {
            username,
            password
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }
        await fetch(`https://gym-app-back.herokuapp.com/login`, requestOptions)
            .then(response => response.json())
            .then(data => props.setToken(data))
            .catch(error => console.log('Error', error))
        props.onHide()
    }

    return (
        <>
            <Modal {...props} >
                <div className="wrapper" >
                    <Form className="p-3 mt-3" onSubmit={handleSubmit}>
                        <Modal.Header className="logoWraper">
                            <Modal.Title id="contained-modal-title-vcenter" className="text-center mt-4 name">
                                <div className="logoLogin">
                                    <img src="./img/logo.png" alt="" />
                                </div>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group className="form-field d-flex align-items-center">
                                <span className="far fa-user"></span>
                                <Form.Control type="text" name="userName" id="userName" placeholder="Username" onChange={e => setUserName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="form-field d-flex align-items-center">
                                <span className="fas fa-key"></span>
                                <Form.Control type="password" name="password" id="pwd" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            </Form.Group>
                            <div className="text-center fs-6"> <a href="#">Sign up</a> </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type='submit' className="btn mt-3">Login</Button>
                        </Modal.Footer>
                    </Form>
                </div>
            </Modal >
        </>
    )
}
 Login.propTypes = {
    setToken: PropTypes.func.isRequired
  } 
export default Login
