import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DentistUI from './UI/DentistUI';
import PatientUI from './UI/PatientUI';
import ReceptionistUI from './UI/ReceptionistUI';
import LoginUI from "./UI/LoginUI";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<LoginUI />}></Route>
          <Route path='/patient' element={<PatientUI />}></Route>
          <Route path='/employees' element={<DentistUI />}></Route>
          <Route path='/receptionist' element={<ReceptionistUI />}></Route>
        </Routes>

      </div>
    )
  }
}

export default App;
