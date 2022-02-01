import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import tasks from './sample/task.json'
import { Row } from 'react-bootstrap';


//Components
import NavBar from './components/NavBar'
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';
import Home from './components/Home'
import User from './components/User'


class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length + 1
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({ tasks: newTasks })

  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })
    this.setState({ tasks: newTasks })
  }

  render() {
    return (
      <div className='App'>
        <BrowserRouter>

          <Row>
            <NavBar />
          </Row>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route
              path="/Tasks" element={
                <div>
                  <TaskForm addTask={this.addTask} />
                  <Tasks
                    tasks={this.state.tasks}
                    deleteTask={this.deleteTask}
                    checkDone={this.checkDone}
                  />
                </div>
              }>
            </Route>
            <Route path="/Posts" element={
              <div>
                <Posts />
              </div>
            }>
            </Route>
            <Route path="/Posts/User/:_id" element={
              <div>
                <User />
              </div>
            }>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
