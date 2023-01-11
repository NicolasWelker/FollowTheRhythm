import React, {useState} from 'react';
import '../styles/App.scss';
import CustomHeader from './CustomHeader';
import {Login} from './Login';
import {Register} from './Register';
import GetCurrentLogins from './GetCurrentLogins';


import '../styles/3DButtons.scss'
// import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }


  return (
    <div className="App">
        <CustomHeader title="Follow The Rhythm" subtitle="You followed the rhythm, and it led you here" /> 
    
      {/* <hr></hr> */}

      {
        currentForm === 'login' ? <Login onFormSwitch = {toggleForm} /> : <Register onFormSwitch = {toggleForm}/>
      }

      <div className = "test">
        <GetCurrentLogins/>
      </div>

    </div>
  );
}

export default App;