import {useState} from 'react'

import { useSignup } from "../hooks/useSignup";
import "../styles/register.scss";


export const Register =(props) => {



    const [email, setEmail] = useState('') // We are controlling peice of state
    const [password, setPassword] = useState('')//state of email & password
    const [fullName, setFullName] = useState('') 
    const [UType, setUType] = useState('')
    const {signup, error, isLoading} = useSignup() // destructuring
    
    const handleSubmit = async (e) => {
        e.preventDefault() //prevent page from reloading when button is clicked so we dont lose the state
        
        await signup( fullName, email, password, UType)
    }

    return (

        <div className="auth-form-container">
            <h2>Register</h2>
            
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                {/* <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" /> */}
                <input type="text" minLength='5' required name="fullName" placeholder="Full name"  onChange={ (e) => setFullName(e.target.value)} value = {fullName}  />
            

                <label htmlFor="email">email</label>
                {/* <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" /> */}
                <input type="email" name="email" placeholder="E-mail"  onChange={(e) => setEmail(e.target.value)} value = {email}   />
             
                <label htmlFor="password">password</label>
                {/* <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /> */}
                <input  type="password" name="password" placeholder="password"  onChange={(e)=> setPassword(e.target.value)} value = {password}  />
          
                <div className= "profileSelect">
                    <input type="radio" value="Fan" name="UType"  onChange={(e) => setUType(e.target.value) } /> Fan
       
                {/* </div> */}
                {/* <div className= "profileSelect"> */}
                    <input type="radio" value="Artist" name="UType" onChange={(e) => setUType(e.target.value)}  /> Artist

                </div>
                
                <button disabled = {isLoading} type="submit">Log In</button>
                {
                    error && <div className="error"> {error} </div>
                }
            </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>

    )

        // props is a way that parent components can send some values or functions to their children
}



