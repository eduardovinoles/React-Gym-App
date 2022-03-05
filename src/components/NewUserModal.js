import { React, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Select from 'react-select'

function NewUserModal(props) {

    const [user, setUser] = useState({
        name: "",
        type: "",
        ci: "",
        address: "",
        tel: ""
    })

    const options = [
        { value: 'Client', label: 'Client' },
        { value: 'Trainer', label: 'Trainer' },
    ]

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleType = (e) => {
        setUser({ ...user, type: e.value })
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
                        <Form.Control type="text" placeholder="123456" name="tel" onChange={handleChange} required />
                        <Form.Label>Type</Form.Label>
                        <Select defaultValue={options[0]}
                            onChange={handleType}
                            options={options}/>
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
