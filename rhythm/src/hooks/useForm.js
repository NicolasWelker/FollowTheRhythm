import { useState } from 'react' 
import {omit} from 'lodash'
import { useLoginsContext } from "../hooks/useLoginsContext";
import { useSignup } from './useSignup';


const useForm = (callback) => {
    
    const {dispatch } = useLoginsContext()
    // we need to dispatch an action which will update our context state
    //add a login to global context state

    //Form values
    const [values, setValues] = useState({});
    //Errors
    const [errors, setErrors] = useState({});

    const {signup, isLoading, error} = useSignup()


    function hasWhiteSpace(s) {
        return s.indexOf(' ') >= 0;
      }

    const validate = (event, name, value) => {
        //A function to validate each input values

        switch (name) {
            case 'fullName':
                if(!hasWhiteSpace(value)){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        fullName:'A full name is at least 2 words'
                    })
                }else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "fullName");
                    setErrors(newObj);
                    
                }
                break;
        
            case 'email':
                if(
                    !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        email:'Enter a valid email address'
                    })
                }else{

                    let newObj = omit(errors, "email");
                    setErrors(newObj);
                    
                }
            break;
            
            case 'password':
                if(
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        password:'Password should contains at least 8 charaters and containing uppercase,lowercase and numbers'
                    })
                }else{

                    let newObj = omit(errors, "password");
                    setErrors(newObj);
                    
                }
            break;
            
            default:
                break;
        }
    }

  //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event,name,val);
        //Let's set these values in state

        setValues({
            ...values,
            [name]:val,
        })

    }


    const handleSubmit = async (event) => {
        if(event) event.preventDefault();

       

        if(Object.keys(errors).length === 0 && Object.keys(values).length !==0 ){
            callback();
            console.log(`values: ${JSON.stringify(values)}`)
            // console.log(`values: ${JSON.stringify(values)}`)
            

            try{
                // const response = await fetch('/api/user/signup', {

                //     method: 'POST',
                //     body: JSON.stringify(values),
                //     headers: {
                //         'Content-Type':'application/json'
                //     }
                // });
            
          
                const response = await signup(values.fullName, values.email, values.password, values.UType)
                console.log(`response: ${JSON.stringify(response)}`)

                const json = await response.json();
            
                if(!response.ok){
                    setErrors(json.error);
                }

                if(response.ok){
                    setValues('');
                    // setErrors(null)
                    console.log('new Login Added', json)
                    dispatch({type: 'CREATE_LOGIN', payload: json})
                };
            }catch{
                throw(error.Object)
            }
       
 

        }else{
            alert("There is an Error!");
        }

    }


    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        isLoading,
        error
    }
}

export default useForm;