import React from 'react';
import './styles/App.scss';
import CustomHeader from './components/CustomHeader';
// import {Login} from './components/Login';
// import {Register} from './components/Register';
import GetCurrentLogins from './components/GetCurrentLogins';

// import {useAuthContext} from './hooks/useAuthContext';
// import { useLogout } from '../hooks/useLogout'

import InnerApp from './components/InnerApp'
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);



function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // };


  return (
    <div className="App">
        <CustomHeader title="Follow The Rhythm" subtitle="You followed the rhythm, and it led you here" /> 
    
      {/* <hr></hr> */}
        <InnerApp/>


    </div>
  );
}

export default App;