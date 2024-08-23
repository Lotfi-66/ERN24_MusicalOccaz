import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/user/Login';
import Register from '../components/user/Register';
import { useAuth } from '../context/AuthContext';

function UserProfile() {
    const [isLogin, setIsLogin] = useState(true);
    const { user } = useAuth();
    const navigate = useNavigate();

    if (user) {
        return (
            <div className="profile">
                <h2>Profil de {user.username}</h2>
                {user.profilePicture && <img src={user.profilePicture} alt="Profile" className="profile-picture" />}
                <p>Email: {user.email}</p>
                {/* Ajoutez d'autres informations de profil ici */}
            </div>
        );
    }

    return (
        <div className="auth-container">
            {isLogin ? (
                <>
                    <Login />
                    <p>Pas encore de compte ? <button onClick={() => setIsLogin(false)}>S'inscrire</button></p>
                </>
            ) : (
                <>
                    <Register />
                    <p>Déjà un compte ? <button onClick={() => setIsLogin(true)}>Se connecter</button></p>
                </>
            )}
        </div>
    );
}

export default UserProfile;