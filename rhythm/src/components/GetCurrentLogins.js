import { useEffect } from "react"; 

import { useLoginsContext } from "../hooks/useLoginsContext";


const GetCurrentLogins = () => {

  //create states to set logins

  const {logins, dispatch} = useLoginsContext();

  useEffect(() => {
    const fetchLogins = async () => {
      const response = await fetch('/api/protoRoutes')
      const json = await response.json() //array of login objects
      
      if (response.ok){
        //update some local states 
        dispatch({type: 'SET_LOGINS', payload: json})
      }
    }

    fetchLogins()
  }) //empty dependency array, meaning it will only fire once when component render
 

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