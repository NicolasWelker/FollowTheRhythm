import React, {useState} from "react";
import useForm from "../hooks/useForm";

import '../styles/App.scss';

export const Login =(props) => {
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault() //otherwise page will be reloaded and we will lose our state
    //     console.log(email)

    // }

    const formLogin = () => {

        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
    }
    
    //Custom hook call
    const {handleChange, values,errors,handleSubmit} = useForm(formLogin);

    return (

        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                {/* <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" /> */}
                
                <input type="email" name="email" placeholder="E-mail"  onChange={handleChange}   />
                {
                    errors.email && <h3>{errors.email}</h3>
                }



                <label htmlFor="password">password</label>
                {/* <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /> */}
               
                <input minLength='8' type="password" name="password" placeholder="password"  onChange={handleChange}   />
                {
                    errors.password && <h3>{errors.password}</h3>
                }

                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}