import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './components/general.css'
import NavBar from './components/NavBar'
import ContactForm from './components/ContactForm';
import Users from './components/Users';
import Home from './components/Home'
import Footer from './components/Footer'
import UserDetails from './components/UserDetails';

class App extends Component {

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
      <div className='app'>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route
              path="/ContactForm" element={
                <div>
                  <ContactForm
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
            <Route path="/UserDetails" element={
              <div>
                <UserDetails />
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
