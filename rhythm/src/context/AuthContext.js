import { createContext, useReducer, useEffect } from "react";


export const AuthContext = createContext()
// essentially a component that will wrap our application

export const authReducer = (state, action) => {
    switch(action.type ){
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return {user : null}
        default:
            return state
    }
}

export const AuthContextProvider= ({children}) => {

    const [state, dispatch]  = useReducer(authReducer, {
        user: null
    })


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))

        if(user){
            dispatch({type: 'LOGIN', payload: user})
        }
    }, []) //empty dependency array. only fire when component first renders

    console.log('AuthContext state: ', state)

    
    return(
        <AuthContext.Provider value = {{...state, dispatch}}>
            {children}
            {/* the children is the app  */}
        </AuthContext.Provider>


    )
}