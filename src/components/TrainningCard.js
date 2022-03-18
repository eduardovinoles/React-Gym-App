import { React } from 'react'
import { Button, Card, Table, Form } from 'react-bootstrap';

function TrainningCard(props) {

    return (
        <div>
            <Card className='user-card col-md-6 col-xs-12'>
                <Card.Body>
                    <Card.Title style={{textAlign: "center"}}><h2>{props.trainingSesion.title}</h2></Card.Title>

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
                            <tr id="row1">
                                <td>{props.trainingSesion.row1.exercise}</td>
                                <td>{props.trainingSesion.row1.muscle}</td>
                                <td colSpan={1}><Form.Control type="number" size='sm' name="reps" defaultValue={props.trainingSesion.row1.reps} min={1} max={19} onChange={props.modifyTrainingSesion} /></td>
                                <td colSpan={1}><Form.Control type="number" size='sm' name="sets" defaultValue={props.trainingSesion.row1.sets} min={1} max={20} onChange={props.modifyTrainingSesion} /></td>
                                <td>{props.trainingSesion.row1.rest} seconds</td>
                            </tr>
                            <tr id="row2">
                                <td>{props.trainingSesion.row2.exercise}</td>
                                <td>{props.trainingSesion.row2.muscle}</td>
                                <td colSpan={1}><Form.Control type="number" size='sm' name="reps" defaultValue={props.trainingSesion.row2.reps} min={1} max={19} onChange={props.modifyTrainingSesion} /></td>
                                <td colSpan={1}><Form.Control type="number" size='sm' name="sets" defaultValue={props.trainingSesion.row2.sets} min={1} max={20} onChange={props.modifyTrainingSesion} /></td>
                                <td>{props.trainingSesion.row2.rest} seconds</td>
                            </tr>
                            <tr id="row3">
                                <td>{props.trainingSesion.row3.exercise}</td>
                                <td>{props.trainingSesion.row3.muscle}</td>
                                <td colSpan={1}><Form.Control type="number" size='sm' name="reps" defaultValue={props.trainingSesion.row3.reps} min={1} max={19} onChange={props.modifyTrainingSesion} /></td>
                                <td colSpan={1}><Form.Control type="number" size='sm' name="sets" defaultValue={props.trainingSesion.row3.sets} min={1} max={20} onChange={props.modifyTrainingSesion} /></td>
                                <td>{props.trainingSesion.row3.rest} seconds</td>
                            </tr>
                            <tr id="row4">
                                <td>{props.trainingSesion.row4.exercise}</td>
                                <td>{props.trainingSesion.row4.muscle}</td>
                                <td colSpan={1}><Form.Control type="number" size='sm'  name="reps" defaultValue={props.trainingSesion.row4.reps} min={1} max={19} onChange={props.modifyTrainingSesion} /></td>
                                <td colSpan={1}><Form.Control type="number" size='sm'  name="sets" defaultValue={props.trainingSesion.row4.sets} min={1} max={20} onChange={props.modifyTrainingSesion} /></td>
                                <td>{props.trainingSesion.row4.rest} seconds</td>
                            </tr>
                            <tr id="row5">
                                <td>{props.trainingSesion.row5.exercise}</td>
                                <td>{props.trainingSesion.row5.muscle}</td>
                                <td colSpan={1}><Form.Control type="number" size='sm' name="reps" defaultValue={props.trainingSesion.row5.reps} min={1} max={19} onChange={props.modifyTrainingSesion} /></td>
                                <td colSpan={1}><Form.Control type="number" size='sm' name="sets" defaultValue={props.trainingSesion.row5.sets} min={1} max={40} onChange={props.modifyTrainingSesion} /></td>
                                <td>{props.trainingSesion.row5.rest} seconds</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="primary" onClick={props.saveSesion}>Save Progress</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default TrainningCard 
