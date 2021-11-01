import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContaxt = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContaxt.Provider value={allContext}>
            {children}
        </AuthContaxt.Provider>
    );
};

export default AuthProvider;