import { createContext, useEffect, useState } from "react";
import auth from './../firebas/config.firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

 
 export const AuthContext =createContext();

const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(null);
    
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

        const singIn = (email,password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
        }

        useEffect (()=>{
            const unsubscribe = onAuthStateChanged(auth,currentUser =>{
                setUser(currentUser);
                console.log('user hoyse',currentUser);
                setLoading(false);
            })
            return ()=>{
                return unsubscribe();
            }
        },[])
    const Info ={
        user,
        loading,
        createUser,
        singIn
    }
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;