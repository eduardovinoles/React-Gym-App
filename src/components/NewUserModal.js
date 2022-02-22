import { React, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function NewUserModal(props) {

    const [user, setUser] = useState({
        name: "",
        type: "",
        ci: "",
        address: "",
        tel: ""
    })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user)
        props.newUser(user)
        props.onHide()
    }

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formUserModal" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" className='text-capitalize' placeholder="name" name="name" onChange={handleChange} required />
                        <Form.Label>C.I</Form.Label>
                        <Form.Control type="text" placeholder="document" name="ci" onChange={handleChange} required />
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" className='text-capitalize' placeholder="street 123" name="address" onChange={handleChange} required />
                        <Form.Label>Telephone</Form.Label>
                        <Form.Control type="number" placeholder="123456" name="tel" onChange={handleChange} required />
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" className='text-capitalize' placeholder="client" name="type" onChange={handleChange} required />
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="success" type="submit">Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal >
    );
}
export default NewUserModal
