import { React, useEffect, useState } from 'react'
import { Button, Card, Row, Col, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import TrainingCard from './TrainingCard';
import LoadingSpinner from './LoadingSpinner'


function UserDetails() {

    const location = useLocation();
    let id = location.state.id
    let clientId = id

    let currentDate = new Date()
    let date = currentDate.toString().slice(0, 15)
    let currentWeekDay = currentDate.toString().slice(0, 3)

    const [user, setUser] = useState(null)
    const [trainingSession, setTrainingSesion] = useState([])
    const [historyRoutines, setHistoryRoutines] = useState([])
    const [dayRoutines, setDayRoutines] = useState([])
    const [todayRoutine, setTodayRoutine] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://gym-app-back.herokuapp.com/user/${id}`)
            .then(response => response.json())
            .then(data => {
                setUser(data)
                getRoutines()
                setIsLoading(false)
            });
    }, []);

    //get the last exercise done 
    useEffect(() => {
        //get the last routine
        if (dayRoutines && historyRoutines) {
            let i = currentTrainingDay(currentWeekDay)
            setTodayRoutine(dayRoutines[i])

            let exerciseHistory = historyRoutines.filter(x => x.name === todayRoutine.name)
            let latest = exerciseHistory.sort((a, b) => new Date(b.date) - new Date(a.date))[0]
            if (latest) {
                let lastDate = latest.date
                latest.date = lastDate.toString().slice(0, 10)
            }
            //set today training from last exercise
            setTrainingSesion(latest)

        }
    }, [historyRoutines, dayRoutines, currentWeekDay, todayRoutine]);


    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value.toUpperCase() });
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
                return 0;
            case "Tue":
                return 1;
            case "Wed":
                return 2;
            case "Thu":
                return 3;
            case "Fri":
                return 4;
            case "Sat":
                return 5;
            default:
                return 0;
        }
    }

    function modifyTrainingSesion(e) {
        let exerciseName = e.target.closest("tr").id
        let newArray = todayRoutine

        newArray.exercises.forEach(exercise => {
            if (exercise.name === exerciseName) {
                exercise[e.target.name] = e.target.value
                setTrainingSesion(newArray)
            }
        });
    }

    const saveSesion = () => {
        //this function populate the data base 
        const populateRoutines = {
            clientId: user._id,
            date: Date(),
            name: trainingSession.name,
            day: trainingSession.day,
            exercises: [...trainingSession.exercises]
        }

        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(populateRoutines)
        }
        fetch(`https://gym-app-back.herokuapp.com/routines`, requestOptions)
            .then(response => console.log(response.json()))
            .catch(error => console.log('Error', error))
    }

    const getRoutines = async () => {
        await fetch(`https://gym-app-back.herokuapp.com/dayroutine`)
            .then(response => response.json())
            .then(data => {
                setDayRoutines(data)
            })

        await fetch(`https://gym-app-back.herokuapp.com/routines/${clientId}`)
            .then(response => response.json())
            .then(data => {
                setHistoryRoutines(data)
            })
            .catch(error => console.log('Error', error))
    }


    return (
        <div className="blurred">
            {isLoading ? <LoadingSpinner /> : user &&
                <Row>
                    <Col xs={12} md={6}><Card className='user-card col-6'>
                        <Card.Img className='header-card' variant="top" src="./img/gim3.jpg" />
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
                            todayRoutine && <TrainingCard
                                trainingSession={todayRoutine}
                                modifyTrainingSesion={modifyTrainingSesion}
                                saveSesion={saveSesion}
                            /> : <div className="inactive-user"><h2>You are a NOT active user !!</h2></div>
                        }
                    </Col>
                    <Col xs={12} md={6}>
                        {user.active ?
                            trainingSession && <TrainingCard
                                trainingSession={trainingSession}
                                modifyTrainingSesion={modifyTrainingSesion}
                                saveSesion={saveSesion}
                            /> : <div className="inactive-user"></div>
                        }
                    </Col>
                </Row>}
        </div>
    )
}
export default UserDetails
