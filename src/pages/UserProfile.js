import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, Link } from 'react-router-dom';

function UserProfile() {
    const { user } = useAuth();

    if (!user) {
        return (
            <div>
                <h2>Vous n'êtes pas connecté</h2>
                <p>Veuillez vous connecter pour accéder à votre profil.</p>
                <Link to="/connexion">Se connecter</Link>
                <br />
                <Link to="/inscription">S'inscrire</Link> {/* Lien vers l'inscription */}
            </div>
        );
    }

    return (
        <div className="profile">
            <h2>Profil de {user.username}</h2>
            <p>Email: {user.email}</p>
            {/* Ajoutez d'autres informations de profil ici */}
        </div>
    );
}

export default UserProfile;