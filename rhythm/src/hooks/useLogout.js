import { application } from "express"
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {

    const {dispatch} = useAuthContext()

    const logout = () => {
        //update global state
        //remove user from storage
        localStorage.removeItem('user')
        // dispatch logout action
        dispatch({type: 'LOGOUT'})

    }

    return {logout}

}