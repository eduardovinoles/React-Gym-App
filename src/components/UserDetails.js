import { React, useEffect, useState } from 'react'
import { Button, Card, Row, Col, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import TrainningCard from './TrainningCard';


function UserDetails() {

    const location = useLocation();
    let id = location.state.id

    let currentDate = new Date()
    let date = currentDate.toString().slice(0, 15)
    let currentWeekDay = currentDate.toString().slice(0, 3)

    const [user, setUser] = useState(null)
    const [trainingSesion, setSesion] = useState([])

    useEffect(() => {
        fetch(`https://gym-app-back.herokuapp.com/user/${id}`)
            .then(response => response.json())
            .then(data => {
                currentTrainingDay(currentWeekDay)
                setUser(data)
            });
    }, []);

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value.toUpperCase() });
        console.log(user)
    }

    const modifyUser = () => {

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }

        fetch(`https://gym-app-back.herokuapp.com/user/${user._id}`, requestOptions)
            .then(response => console.log('Submitted successfully'))
            .catch(error => console.log('Form submit error', error))
    }

    const currentTrainingDay = (currentWeekDay) => {
        switch (currentWeekDay) {
            case "Mon":
                return setSesion(training1);
            case "Tue":
                return setSesion(training2);
            case "Wed":
                return setSesion(training3);
            case "Thu":
                return setSesion(training4);
            case "Fri":
                return setSesion(training5);
            case "Sat":
                return setSesion(training6);
            default:
        }
    }

    function modifyTrainingSesion(e) {
        let currentRow = e.target.closest("tr").id
        let inputToModify = e.target.name
        let value = e.target.value
        trainingSesion[currentRow][inputToModify] = value
        //console.log(trainingSesion[currentRow])
    }

    

    const saveSesion = () => {
      //this function populate the data base 
        const populateRoutines = {
            clientId: user._id,
            date: Date(),
            exercise: "Ankle Crunches",
            series: 10,
            repetitions: 15
        }

       
        /*    let requestOptions = {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(populateRoutines)
           }
           fetch(`https://gym-app-back.herokuapp.com/routines`, requestOptions)
               .then(response => console.log(response.json()))
               .catch(error => console.log('Error', error)) 
     */
   
       
    }




    let training1 = {
        title: "Monday training",
        row1: { exercise: "Lateral Raises", muscle: "Shoulders", reps: 3, sets: 12, rest: 30 },
        row2: { exercise: "Front Raises", muscle: "Shoulders", reps: 3, sets: 12, rest: 30 },
        row3: { exercise: "Front Lunges", muscle: "Quads & Gluteus", reps: 3, sets: 12, rest: 60 },
        row4: { exercise: "Squats", muscle: "Quads & Gluteus", reps: 3, sets: 12, rest: 60 },
        row5: { exercise: "Ankle Crunches", muscle: "Abdominals", reps: 3, sets: 30, rest: 10 }
    }

    let training2 = {
        title: "Tuesday training",
        row1: { exercise: "Flyes", muscle: "Chest", reps: 3, sets: 12, rest: 30 },
        row2: { exercise: "Chest Press", muscle: "Chest", reps: 3, sets: 12, rest: 30 },
        row3: { exercise: "Triceps Kickback", muscle: "Triceps", reps: 3, sets: 12, rest: 60 },
        row4: { exercise: "Dips", muscle: "Triceps", reps: 3, sets: 15, rest: 45 },
        row5: { exercise: "Interval Training", muscle: "", reps: 0, sets: 0, rest: 0 }
    }

    let training3 = {
        title: "Wednesday training",
        row1: { exercise: "Push-ups", muscle: "Entire upper body", reps: 3, sets: 20, rest: 30 },
        row2: { exercise: "Reverse leg curls", muscle: "Gluteus", reps: 3, sets: 15, rest: 30 },
        row3: { exercise: "Alternating Leg Raises", muscle: "Abs", reps: 2, sets: 30, rest: 30 },
        row4: { exercise: "Twist & Slot", muscle: "Abs/Obliqs", reps: 2, sets: 30, rest: 30 },
        row5: { exercise: "Interval Training", muscle: "", reps: 0, sets: 0, rest: 0 }
    }

    let training4 = {
        title: "Thursday training",
        row1: { exercise: "Hammer curls", muscle: "Biceps", reps: 3, sets: 12, rest: 30 },
        row2: { exercise: "Bicep Curls", muscle: "Biceps", reps: 3, sets: 15, rest: 30 },
        row3: { exercise: "One Arm Rows", muscle: "Backs", reps: 3, sets: 12, rest: 45 },
        row4: { exercise: "Bent Over Rows", muscle: "Back", reps: 3, sets: 12, rest: 45 },
        row5: { exercise: "Interval Training", muscle: "", reps: 0, sets: 0, rest: 0 }
    }

    let training5 = {
        title: "Friday training",
        row1: { exercise: "Stiff-Leg Deadlifts", muscle: "Armstrings", reps: 3, sets: 12, rest: 60 },
        row2: { exercise: "Step-ups", muscle: "Arms & Quads", reps: 3, sets: 12, rest: 60 },
        row3: { exercise: "Push Throughs", muscle: "Abs", reps: 3, sets: 30, rest: 30 },
        row4: { exercise: "Reverse Crunch", muscle: "Abs", reps: 3, sets: 30, rest: 30 },
        row5: { exercise: "Interval Training", muscle: "", reps: 0, sets: 0, rest: 0 }
    }

    let training6 = {
        title: "Saturday training",
        row1: { exercise: "Standing Calve Raises", muscle: "Calf", reps: 3, sets: 15, rest: 15 },
        row2: { exercise: "Seated Calve Raises", muscle: "Calf", reps: 3, sets: 15, rest: 15 },
        row3: { exercise: "Interval Training", muscle: "", reps: 0, sets: 0, rest: 0 },
        row4: { exercise: "", muscle: "", reps: 0, sets: 0, rest: 0 },
        row5: { exercise: "", muscle: "", reps: 0, sets: 0, rest: 0 }
    }

    return (
        <div>
            {user &&
                <Row>
                    <Col xs={12} md={6}><Card className='user-card col-6'>
                        <Card.Img className='header-card' variant="top" src="./img/plates.jpg" />
                        <Card.Body>
                            <div><img className='profile-image' src='./img/profileImage.jpg' alt='profile' /></div>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formUserModal" >
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="" name="name" defaultValue={user.name} onChange={handleChange} disabled={!user.active} />
                                        <Form.Label>C.I</Form.Label>
                                        <Form.Control type="text" placeholder="" name="ci" defaultValue={user.ci} onChange={handleChange} disabled={!user.active} />
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" placeholder="" name="address" defaultValue={user.address} disabled />
                                        <Form.Label>Telephone</Form.Label>
                                        <Form.Control type="text" placeholder="" name="tel" defaultValue={user.tel} disabled />
                                        <Form.Label>Medical Care</Form.Label>
                                        <Form.Control type="text" placeholder="" name="medicalCare" defaultValue={user.medicalCare} onChange={handleChange} disabled={!user.active} />
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control type="text" placeholder="" name="birthDate" defaultValue={user.birthDate} onChange={handleChange} disabled={!user.active} />
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                            <Button variant="primary" onClick={modifyUser}>Save changes</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        {user.active ?
                            <TrainningCard
                                trainingSesion={trainingSesion}
                                modifyTrainingSesion={modifyTrainingSesion}
                                saveSesion={saveSesion}
                            /> : <div className="inactive-user"><h2>You are a NOT active user !!</h2></div>
                        }
                    </Col>
                </Row>}
        </div>
    )
}
export default UserDetails
