


import AuthContext from "./AuthContext";


const useAuthContext = () => {
    const user = useContext(AuthContext);
    if (user === undefined) {   
        throw new Error("useAuthContext can only be used inside AuthProvider");
    }
     return user;
};

// Now if code outside the provider calls AuthContext, 
// your application will handle the error gracefully.