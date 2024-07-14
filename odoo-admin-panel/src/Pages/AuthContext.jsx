import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [RightComponentLoad, setRightComponentLoad] = useState('')

    console.log(RightComponentLoad)

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, setRightComponentLoad, RightComponentLoad }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
