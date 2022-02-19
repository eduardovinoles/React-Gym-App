import { React, useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './testModal.css'

function MyModal(props) {

    const [user, setUser] = useState()

    useEffect(() => {
        setUser({
            _id: props.userModal._id,
            name: props.userModal.name,
            type: props.userModal.type,
            ci: props.userModal.ci,
            address: props.userModal.address,
            tel: props.userModal.tel
        })
    }, [props.userModal])

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (event) => {
        props.onHide()
        console.log("handleSubmit")
        event.preventDefault();
        console.log(user)
        props.modifyUser(user)
    }

    const confirmDelete = () => {
        confirmAlert({
            title: 'Confirm to delete ',
            message: 'Are you sure to do this?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => props.deleteUser(props.userModal._id)
                },
                {
                    label: 'No',
                }
            ]
        });
    }


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.userModal.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formUserModal" >
                        <Form.Label>C.I</Form.Label>
                        <Form.Control type="text" placeholder="" name="ci" defaultValue={props.userModal.ci} onChange={handleChange} />
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="" name="address" defaultValue={props.userModal.address} onChange={handleChange} />
                        <Form.Label>Telephone</Form.Label>
                        <Form.Control type="number" placeholder="" name="tel" defaultValue={props.userModal.tel} onChange={handleChange} />
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" placeholder="" name="type" defaultValue={props.userModal.type} onChange={handleChange} />
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">Submit</Button>
                        <Button type="button" onClick={(e) => { props.onHide(); confirmDelete() }}>Delete</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
export default MyModal


