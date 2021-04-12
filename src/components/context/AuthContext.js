import React, { useContext, useState, useEffect } from 'react';
import { auth } from "../../firebase"
const AuthContext = React.createContext()
export const useAuth = () => {
    return useContext(AuthContext)
}
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    console.log(currentUser)
    const Signup = ((email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)

    })
    const Login = ((email, password) => {
        return auth.signInWithEmailAndPassword(email, password).catch((err) => console.log(err.message))
    })
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)

        })
        return unsubscribe
    }, [])
    const value = {
        currentUser,
        Signup,
        Login
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}