import { React, useState, useEffect} from 'react'
import { Button, Table } from 'react-bootstrap';
import MyModal from './TestModal.js'



function Users() {

  const [modalShow, setModalShow] = useState(false);
  const [userModified, setState] = useState(false)
  const [users, setUsers] = useState(null)

  const [userModal, setUserModal] = useState({
    name: "",
    type: "",
    ci: "",
    address: "",
    tel: ""
  })


  useEffect(() => {

    fetch('https://gym-app-back.herokuapp.com/user')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
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
      <div style={{
        textAlign: "left", fontFamily: "Black Ops One",
        fontSize: "2vh", color: "chartreuse", verticalAlign: "middle", margin: "5% 5% 10% 5%"
      }}>
        <MyModal
          modifyUser={modifyUser}
          show={modalShow}
          onHide={() => setModalShow(false)}
          userModal={userModal}
          deleteUser={deleteUser}
        />
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
                {/* <td> <Link to={`./User/${user._id}`}>
                  <Button variant="primary">Edit</Button>
                </Link></td> */}
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  )
}
export default Users
