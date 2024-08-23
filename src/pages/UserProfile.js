import React from 'react';
import { useAuth } from '../context/AuthContext';
import Login from '../components/user/Login';

function UserProfile() {
    const { user } = useAuth();

    if (!user) {
        return <Login />;
    }

    return (
        <div className="user-profile">
            <h2>Profil de {user.username}</h2>
            {/* Ajoutez ici les détails du profil de l'utilisateur */}
        </div>
    );
}

export default UserProfile;