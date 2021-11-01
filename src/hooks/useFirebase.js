import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuth from '../Pages/Firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from "react";

const provider = new GoogleAuthProvider();

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleSignInProvider = () => {
        setIsLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
            setIsLoading(false)
        })
    }, [auth]);

    return {
        user,
        logOut,
        isLoading,
        setIsLoading,
        googleSignInProvider
    }
};

export default useFirebase;