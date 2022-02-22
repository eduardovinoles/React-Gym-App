import { React, useState, useEffect } from 'react'
import { Button, Table, Row } from 'react-bootstrap';
import EditUserModal from './EditUserModal.js'
import NewUserModal from './NewUserModal.js'
import LoadingSpinner from './LoadingSpinner'

function Users() {

  const [editModalShow, setModalShow] = useState(false);
  const [newUserModalShow, setNewUserModalShow] = useState(false);
  const [userModified, setState] = useState(false)
  const [users, setUsers] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  const [userModal, setUserModal] = useState({
    name: "",
    type: "",
    ci: "",
    address: "",
    tel: ""
  })

  useEffect(() => {
    setIsLoading(true)
    fetch('https://gym-app-back.herokuapp.com/user')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setIsLoading(false)
      });
  }, [userModified]);

  const changeState = () => {

    if (userModified === false) {
      setState(true)
    } else setState(false)
  }

  function findUser(id) {

    let user = users.find((e) => {
      return e._id === id
    })
    setUserModal(user)
    setModalShow(true)
  }

  const newUser = (newUser) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    }
    fetch(`https://gym-app-back.herokuapp.com/user`, requestOptions)
      .then(response => console.log(response.json()))
      .then(changeState)
      .catch(error => console.log('Error', error))
  }

  const modifyUser = (user) => {

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }

    fetch(`https://gym-app-back.herokuapp.com/user/${user._id}`, requestOptions)
      .then(response => console.log('Submitted successfully'))
      .then(changeState)
      .catch(error => console.log('Form submit error', error))
  }

  const deleteUser = (id) => {

    fetch(`https://gym-app-back.herokuapp.com/user/${id}`, { method: 'DELETE' })
      .then(() => {
        console.log('removed')
      })
      .then(changeState)
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <>
      <div className="users-div">
        {isLoading ? <LoadingSpinner /> : modifyUser}
        <EditUserModal
          modifyUser={modifyUser}
          show={editModalShow}
          onHide={() => setModalShow(false)}
          userModal={userModal}
          deleteUser={deleteUser}
        />
        <NewUserModal
          show={newUserModalShow}
          onHide={() => setNewUserModalShow(false)}
          newUser={newUser}
        />
        <Row>
          <div>
            <Button className="create-new-user-button" onClick={(e) => { setNewUserModalShow(true) }} >Create User</Button>
          </div>
        </Row>
        <Row>
          <Table striped bordered hover variant="dark" responsive="sm">
            <thead>
              <tr style={{ color: "chartreuse" }}>
                <th>Name</th>
                <th>Type</th>
                <th>C.I</th>
                <th>Address</th>
                <th>Tel</th>
                <th></th>
              </tr>
            </thead>
            <tbody style={{ verticalAlign: "middle" }}>
              {users && users.map((user) =>
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.type}</td>
                  <td>{user.ci}</td>
                  <td>{user.address}</td>
                  <td>{user.tel}</td>
                  <td> <Button variant="primary" id={user._id} onClick={(e) => { findUser(e.target.id) }}>Edit</Button> </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Row>
      </div>
    </>
  )
}
export default Users
