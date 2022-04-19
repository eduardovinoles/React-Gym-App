import { React, useState, useEffect } from 'react'
import { Button, Table, Row } from 'react-bootstrap'
import EditUserModal from './EditUserModal.js'
import NewUserModal from './NewUserModal.js'
import LoadingSpinner from './LoadingSpinner'
import { useNavigate } from 'react-router-dom'

function Users() {

  const [editModalShow, setModalShow] = useState(false);
  const [newUserModalShow, setNewUserModalShow] = useState(false);
  const [userModified, setState] = useState(false)
  const [users, setUsers] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate()


  const [userModal, setUserModal] = useState({})

  useEffect(() => {
  
    fetch('https://gym-app-back.herokuapp.com/routines')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        
      });
  }, []);

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

  function goToUserDetails(id) {
    navigation("/UserDetails",{state:{id}})
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

  const modifyUser = (editedUser) => {

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedUser)
    }

    fetch(`https://gym-app-back.herokuapp.com/user/${editedUser._id}`, requestOptions)
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
            <Button className="create-new-user-button" onClick={(e) => { setNewUserModalShow(true) }}>Create User</Button>
          </div>
        </Row>
        <Row>
          <Table striped bordered hover variant="dark" responsive="sm">
            <thead>
              <tr style={{ color: "chartreuse" }}>
                <th>Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Address</th>
                <th>Tel</th>
                <th></th>
              </tr>
            </thead>
            <tbody style={{ verticalAlign: "middle" }}>
              {users && users.map((user) =>
               <tr role="button" key={user._id}>
                  <td onClick={(e)=> {goToUserDetails(user._id)}}>{user.name}</td>
                  <td onClick={(e)=> {goToUserDetails(user._id)}}>{user.type}</td>
                  <td onClick={(e)=> {goToUserDetails(user._id)}}>{user.active ? "Active" : "Not Active"}</td>
                  <td onClick={(e)=> {goToUserDetails(user._id)}}>{user.address}</td>
                  <td onClick={(e)=> {goToUserDetails(user._id)}}>{user.tel}</td>
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
