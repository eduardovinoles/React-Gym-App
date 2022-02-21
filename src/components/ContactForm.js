import React from "react"
import { Row, Form, Button } from 'react-bootstrap'

function ContactForm() {


    return (
        <div style={{ fontFamily: "Black Ops One", fontSize: "20px", color: "chartreuse" }}>
            <Row>
                <img src={'./img/join.png'} style={{ width: "100%" }} alt="" />
            </Row>
            <Row style={{ justifyContent: "center" }}>
                <div style={{
                    display: 'block',
                    width: 500,
                    padding: 30
                }}>
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter your full name:</Form.Label>
                            <Form.Control type="text" className='text-capitalize'
                                placeholder="John Doe" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Enter your email address:</Form.Label>
                            <Form.Control type="email"
                                placeholder="abc@example.com" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Enter your contact number:</Form.Label>
                            <Form.Control type="text" placeholder="123456" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Writhe a comment:</Form.Label>
                            <Form.Control as="textarea"
                                placeholder="" />
                        </Form.Group>
                        <Button style={{ margin: "5% 40%" }} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Row>
        </div>
    )
}
export default ContactForm
