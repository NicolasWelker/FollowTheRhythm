import { useState } from 'react'
import { useAuthContext } from "./useAuthContext";


export const  useLogin = () =>{

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch } = useAuthContext();

    // for useLogin we dont need all attributes of profile, just email and password
    const login = async ( email, password) => {
        setIsLoading(true);
        setError(null);


        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password})
        })

        const json = await response.json();
        console.log(json);
        
        if( !response.ok){

            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok){
            //save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context /global state
            dispatch({type: 'LOGIN', payload: json})
            //update laoding state 
            setIsLoading(false)
            //take json web token and store in browser
        }

    }

    return {login, isLoading, error}



}