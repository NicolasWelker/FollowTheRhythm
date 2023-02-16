import { useEffect } from "react"; 

import { useLoginsContext } from "../hooks/useLoginsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const GetCurrentLogins = () => {

  //create states to set logins

  const {logins, dispatch} = useLoginsContext();
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchLogins = async () => {
      const response = await fetch('/api/protoRoutes', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })  

      const json = await response.json() //array of login objects
      
      if (response.ok){
        //update some local states 
        dispatch({type: 'SET_LOGINS', payload: json})
      }
    }

    if(user){
      fetchLogins() //Since we are using `user` inside useEffect() 
      // it needs to be added as a dependency
    }
  } ,[dispatch , user]) 
 

  return (

    <div className = "getCurrentLogins">
        <h2> BEGIN TESTING: displayLogins  ...</h2>
        <div className = "logins">
            {logins && logins.map((login) => (
                <p key = {login._id}> {login.fullName}</p>
            ))}
        </div>
    </div>
  )

}

   
export default GetCurrentLogins;