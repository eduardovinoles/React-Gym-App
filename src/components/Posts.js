import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Col, Card, Button, Row } from 'react-bootstrap';
import '../posts.css'


export default class Posts extends Component {

  state = {
    posts: []
  }

  async componentDidMount() {
    const res = await fetch('https://gym-app-back.herokuapp.com/user')
    const data = await res.json()
    console.log(data)
    this.setState({ posts: data })
  }

  render() {
    return (
      <div >

        <h1>Users</h1>
        <Row xs={1} md={2} lg={4} className="g-4">
          {
            this.state.posts.map(post => {
              return <div key={post._id}>
                <Col>
                  <Card className='user-card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../components/" >
                    </Card.Img>
                    <Card.Body>
                      <Card.Title>{post.name}</Card.Title>
                      <ul className='user-ul'>
                        <Card.Text>
                          <li>Type: {post.type}</li>
                          <li>Ci: {post.ci}</li>
                          <li>Address: {post.address}</li>
                          <li>Tel: {post.tel}</li>
                        </Card.Text>
                      </ul>
                      <Link to={`./User/${post._id}`}>
                        <Button variant="primary">Edit</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            })
          }
        </Row>
      </div>
    )
  }
}


