import React, {useState} from "react";
import {useLogin } from "../hooks/useLogin"

import '../styles/App.scss';

export const Login =(props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault() //otherwise page will be reloaded and we will lose our state

        await login(email, password);
    }



    return (

        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                {/* <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" /> */}
                
                <input type="email" name="email" placeholder="E-mail" onChange = {(e)=> setEmail(e.target.value)}  value = {email} />
          

                <label htmlFor="password">password</label>
                {/* <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /> */}
               
                <input minLength='8' type="password" name="password" placeholder="password"  onChange= { (e) => setPassword(e.target.value)} value={password}  />

                {/* <input type="radio" value="Other" name="gender" /> Other        */}

                <button disabled= {isLoading}  type="submit">Log In</button>
                {error && <div className = "error"> {error} </div>}
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}