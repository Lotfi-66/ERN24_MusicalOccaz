import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Header() {
    const { user, logout } = useAuth();

    return (
        <header>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/listings">Annonces</Link>
                {user ? (
                    <>
                        <Link to="/profile">Profil</Link>
                        <button onClick={logout}>Déconnexion</button>
                    </>
                ) : (
                    <Link to="/connexion">Connexion</Link>
                )}
            </nav>
        </header>
    );
}

export default Header;