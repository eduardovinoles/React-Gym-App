import { React } from 'react'
import { Button, Card, Table, Form } from 'react-bootstrap';

function TrainningCard(props) {


    return (
        <div>
            <Card className='user-card col-md-6 col-xs-12'>
                <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>
                        <h2>{props.trainingSession.day}</h2>
                      { props.trainingSession.date ? <h3>{props.trainingSession.date}</h3> : <></> }
                    </Card.Title>

                    <Table className="user-card" style={{ width: "-webkit-fill-available" }} striped bordered hover responsive="lg">
                        <thead style={{ backgroundColor: "black" }}>
                            <tr style={{ color: "chartreuse" }}>
                                <th>Exercise</th>
                                <th>Muscle Group</th>
                                <th>Sets</th>
                                <th>Reps</th>
                                <th>Rest</th>
                            </tr>
                        </thead>
                        <tbody style={{ verticalAlign: "middle" }}>
                            {props.trainingSession.exercises && props.trainingSession.exercises.map((row, i) =>
                                <tr key={i} id={row.name}>
                                    <td>{row.name}</td>
                                    <td>{row.muscleGroup}</td>
                                    <td colSpan={1}><Form.Control type="number" size='sm' name="sets" defaultValue={row.sets} min={1} max={20} onChange={props.modifyTrainingSesion} /></td>
                                    <td colSpan={1}><Form.Control type="number" size='sm' name="reps" defaultValue={row.reps} min={1} max={19} onChange={props.modifyTrainingSesion} /></td>
                                    <td>{row.rest} seconds</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    <Button variant="primary" onClick={props.saveSesion}>Save Progress</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default TrainningCard 
