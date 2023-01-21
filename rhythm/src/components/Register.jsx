// import React, {useState} from "react"
import useForm from "../hooks/useForm";
import "../styles/register.scss";



export const Register =(props) => {

    //Final submit function
    const formLogin = () => {

        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
    }

    //Custom hook call
    const {handleChange, values,errors,handleSubmit} = useForm(formLogin);

     

    return (

        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                {/* <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" /> */}
                <input type="text" minLength='5' required name="fullName" placeholder="Full name"  onChange={handleChange}   />
                {
                    errors.fullName && <h3>{errors.fullName}</h3>
                }

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
                <div className= "profileSelect">
                    <input type="radio" value="Fan" name="UType"  onChange={handleChange}/> Fan
                    {
                        errors.UType
                    }
                {/* </div> */}
                {/* <div className= "profileSelect"> */}
                    <input type="radio" value="Artist" name="UType" onChange={handleChange} /> Artist
                    {
                        errors.UType
                    }
                </div>
                
                <button type="submit">Log In</button>
            </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>

    )

        // props is a way that parent components can send some values or functions to their children
}



