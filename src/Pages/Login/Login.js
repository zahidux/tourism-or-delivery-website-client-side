import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { googleSignInProvider, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        googleSignInProvider()
            .then(result => {
                history.push(redirect_uri)
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div className="login_area container-fluid">
            <div className="logo">
                <h1>Hotel Booking</h1>
            </div>
            <div className="login_container">
                <div className="login_body">
                    <h1>Login with</h1>
                    <div className="google_logo">
                        <img src="https://i.ibb.co/f48CVVP/google.png" alt="" />
                    </div>
                    <div className="google_login" onClick={handleGoogleLogin}>
                        <img src="https://i.ibb.co/3rwxDRh/google-logo-9827.png" alt="" />
                        <span>Connect with Google</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;