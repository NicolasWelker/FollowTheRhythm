'use strict'
import {createContext, useReducer} from 'react'

export const LoginsContext = createContext();

export const LoginsReducer = (state, action) => {
    switch (action.type){
        case 'SET_LOGINS':
            return {
                logins: action.payload
            }
        case 'CREATE_LOGIN':
            return {
                login: [action.payload, ...state.logins] 
                //              ...spread current state.logins property
            }
        default:
            return state
    }
}


//provide context to application componetn tree
export const LoginsContextProvider = ({children}) => { 
// we can destructure children property from props in this component, 
// children property represent whatever component or templates that loginContextProvider wraps
    const [state, dispatch] = useReducer(LoginsReducer, {
        logins: null
    })
    // dispatch takes an object with a type- describes state change
    //payload- represents any data required to make change, dispatch argument is known as an action
    // dispatch({type: 'SET_LOGINS', payload:[{}, {}]})

// return a template of workout context
    return (
        <LoginsContext.Provider value = {{...state, dispatch}} > 
                    {/* make state and dispatch available in other components */}
            {/* wrap a compoent that needs this context */}
            {children}
        </LoginsContext.Provider>
        // all components will be provided this login context
    )
} 