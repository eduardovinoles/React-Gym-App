import { React, useEffect, useState } from 'react'
import { Button, Card, Row, Col, Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';



function UserDetails() {

    const location = useLocation();
    let id = location.state.id
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch(`https://gym-app-back.herokuapp.com/user/${id}`)
            .then(response => response.json()) 
            .then(data => {
                setUser(data)
            });
    }, []);




    return (
        <div>
            {user &&
            <Row>
                <Col xs={12} md={6}><Card className='user-card col-6'>
                    <Card.Img className='header-card' variant="top" src="./img/gim7.jpg" />
                    <Card.Body>
                        <div><img className='profile-image' src='./img/profileImage.jpg' alt='profile' /></div>
                        <Card.Title>{user.name}</Card.Title>
                         <Card.Text>
                            CI: {user.ci} <br />
                            Tel: {user.tel}<br />
                            DB: {user.birthDate}<br />
                            Address: {user.address}<br />
                            Medical Care: {user.medicalCare}<br />
                            Notes:{user.notes}
                        </Card.Text> 
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>}
        </div>
    )
}
export default UserDetails