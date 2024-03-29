import { useState } from 'react'
import { useAuthContext } from "../hooks/useAuthContext";


export const  useSignup = () =>{

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch } = useAuthContext();


    const signup = async (fullName, email, password, UType) => {
        setIsLoading(true);
        setError(null);


        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({fullName, email, password, UType})
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

    return {signup, isLoading, error}



}