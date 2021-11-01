import React from 'react';
import { Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { user, logOut, googleSignInProvider } = useFirebase();
    return (
        <div className="login_container">
            <div className="logo">
                <h1>TURISTA</h1>
            </div>
            <h1>Login with</h1>
            <h1>name :{user.displayName}</h1>
            <div className="google_login" onClick={googleSignInProvider}>
                <img src="https://image.pngaaa.com/555/25555-middle.png" alt="" />
                <span>Connect with Google</span>
            </div>
            <Button onClick={logOut}>Log out</Button>
        </div>
    );
};

export default Login;