

import {useAuthContext} from '../hooks/useAuthContext';
import {Login} from './Login';
import {Register} from './Register';
import React, {useState} from 'react';

import {InnerRhythm} from './InnerRhythm';

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
                        
                <InnerRhythm/>


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


        </div>
    )
}