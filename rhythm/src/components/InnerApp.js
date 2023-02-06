

import {useAuthContext} from '../hooks/useAuthContext';
// import { useLogout } from '../hooks/useLogout'
import {useLogin} from '../hooks/useLogin'
import {Login} from './Login';
import {Register} from './Register';
import React, {useState} from 'react';



export const InnerApp= (props) => {

    const {dispatch} = useAuthContext()

    const logout = () => {
        //update global state
        //remove user from storage
        localStorage.removeItem('user')
        // dispatch logout action
        dispatch({type: 'LOGOUT'})

    }
    const { user } = useAuthContext()

    const handleClick = () => {
        logout();
    }

    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    };
    
    return (
        <div className ="InnerApp">
            {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
            )}

            {!user && (
                <div>
                    {
                    currentForm === 'login' ? <Login onFormSwitch = {toggleForm} /> : <Register onFormSwitch = {toggleForm}/>
                    }
                </div>
             )}

        
            {/* <div className = "LogoutButton">

                <button type="Logout">Logout</button>

            </div> */}

        </div>
    )
}