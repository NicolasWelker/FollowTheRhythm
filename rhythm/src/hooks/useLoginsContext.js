import { LoginsContext } from "../context/LoginsContext";
import {useContext} from 'react';


export const useLoginsContext = () => {
    const context = useContext(LoginsContext);

    if (!context){
        throw Error('useLoginsContext must be used inside a LoginsContextProvider')
    }

    return context;

}