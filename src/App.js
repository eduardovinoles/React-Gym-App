import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import tasks from './sample/task.json'
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import NavBar from './components/NavBar'
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Users from './components/Users';
import Home from './components/Home'
import User from './components/User'
import Footer from './components/Footer'

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
      <div className='App' style={{ backgroundColor: "black", fontSize: "4vh" }}>
        <BrowserRouter>
          <NavBar />
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
            <Route path="/Users" element={
              <div>
                <Users /> 
              </div>
            }>
            </Route>
            <Route path="/Users/User/:_id" element={
              <div>
                <User />
              </div>
            }>
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
