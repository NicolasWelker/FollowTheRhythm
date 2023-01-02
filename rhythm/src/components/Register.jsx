import React, {useState} from "react"
import useForm from "../hooks/useForm";



export const Register =(props) => {

    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    // const [name, setName] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault() //otherwise page will be reloaded and we will lose our state
    //     console.log(email)

    // }
    
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
                <input type="text" minLength='5' required name="username" placeholder="username"  onChange={handleChange}   />
                {
                    errors.username && <h3>{errors.username}</h3>
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

                <button type="submit">Log In</button>
            </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>

    )

        // props is a way that parent components can send some values or functions to their children
}



