import React, { createContext, useState, useContext } from 'react';
import { login as apiLogin, register as apiRegister } from '../services/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await apiLogin(email, password);
            setUser(response.user);
            localStorage.setItem('token', response.token);
            return true;
        } catch (error) {
            console.error('Erreur de connexion:', error);
            return false;
        }
    };

    const register = async (formData) => {
        try {
            const response = await apiRegister(formData);
            setUser(response.user);
            localStorage.setItem('token', response.token);
            return true;
        } catch (error) {
            console.error('Erreur d\'inscription:', error);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);