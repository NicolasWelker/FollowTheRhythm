import React from 'react';
import './styles/App.scss';
import CustomHeader from './components/CustomHeader';
import GetCurrentLogins from './components/GetCurrentLogins';
// import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
//browserrouter - wraps everything we want to use router //Routes wraps routes // route to create a route

import { useAuthContext } from './hooks/useAuthContext';



import InnerApp from './components/InnerApp'

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);



function App() {

  const { user } = useAuthContext();

  return (
    <div className="App">
        <div>

          <CustomHeader title="Follow The Rhythm" subtitle="You followed the rhythm, and it led you here" /> 
          <InnerApp/>

        </div>

        {user && (
            <div>
              <GetCurrentLogins/>

            </div>
        )
          
        }

      


    </div>


  );
}

export default App;