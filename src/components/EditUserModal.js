import { React, useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import Select from 'react-select'

function EditUserModal(props) {

    const [user, setUser] = useState()

    useEffect(() => {
        setUser({
            _id: props.userModal._id,
            name: props.userModal.name,
            type: props.userModal.type,
            ci: props.userModal.ci,
            address: props.userModal.address,
            tel: props.userModal.tel,
            medicalCare: props.userModal.medicalCare,
            birthDate: props.userModal.birthDate,
            notes: props.userModal.notes
        })
    }, [props.userModal])

    const options = [
        { value: 'Client', label: 'Client' },
        { value: 'Trainer', label: 'Trainer' },
    ]

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleType = (e) => {
        setUser({ ...user, type: e.value })
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
            ],
        });
    }

    return (
        <Modal
            {...props}
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
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="" className='text-capitalize' name="name" defaultValue={props.userModal.name} onChange={handleChange} />
                        <Form.Label>C.I</Form.Label>
                        <Form.Control type="text" placeholder="" name="ci" defaultValue={props.userModal.ci} onChange={handleChange} />
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="" className='text-capitalize' name="address" defaultValue={props.userModal.address} onChange={handleChange} />
                        <Form.Label>Telephone</Form.Label>
                        <Form.Control type="text" placeholder="" name="tel" defaultValue={props.userModal.tel} onChange={handleChange} />
                        <Form.Label>Medical Care</Form.Label>
                        <Form.Control type="text" placeholder="" className='text-capitalize' name="medicalCare" defaultValue={props.userModal.medicalCare} onChange={handleChange} />
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="text" placeholder="" name="birthDate" defaultValue={props.userModal.birthDate} onChange={handleChange} />
                        <Form.Label>Notes</Form.Label>
                        <Form.Control as="textarea" placeholder="" name="notes" defaultValue={props.userModal.notes} onChange={handleChange} />
                        <Form.Label>Type</Form.Label>
                        <Select
                            defaultValue={
                                options.filter(option => option.label === props.userModal.type)}
                            onChange={handleType}
                            options={options} />
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="success" type="submit">Submit</Button>
                        <Button variant="danger" type="button" onClick={(e) => { props.onHide(); confirmDelete() }}>Delete</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal >
    );
}
export default EditUserModal
