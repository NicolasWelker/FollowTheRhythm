


import {AuthContext} from "../context/AuthContext";
import {useContext} from 'react';

//use__context__file just consumes the previously declared context
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {   
        throw new Error("useAuthContext can only be used inside AuthContextProvider");
    }
     return context;
};

// Now if code outside the provider calls AuthContext, 
// your application will handle the error gracefully.