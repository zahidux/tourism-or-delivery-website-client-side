import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './PrivateRoute.css';

function PrivateRoute({ children, ...rest }) {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="loading">
                <Spinner className="spinner" animation="grow" variant="danger" />
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;