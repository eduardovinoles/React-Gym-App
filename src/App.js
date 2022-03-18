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
