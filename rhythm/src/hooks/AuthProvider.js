

// create AuthProvider.js and add the provider function.

import { useState, useEffect } from 'react';
import { getUser } from './auth.js'
import AuthContext from './AuthContext'


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const currentUser = getUser() 
        // Here, you are retrieving the current user from a fake getUser() function. 
        // In a real application, this would be your backend service.
        setUser(currentUser) }, []);
        // Store the user in the current state to keep track of any changes 
        // then pass the user to the provider in the value prop.

    return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};