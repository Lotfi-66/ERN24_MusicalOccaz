import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Header() {
    const { user, logout } = useAuth();

    return (
        <header>
            <nav>
                <Link to="/">MusicalOccaz</Link>
                <Link to="/listings">Annonces</Link>
                {user ? (
                    <>
                        <Link to="/publish">Publier une annonce</Link>
                        <Link to="/profile">Profil</Link>
                        <button onClick={logout}>Déconnexion</button>
                    </>
                ) : (
                    <Link to="/profile">Connexion/Inscription</Link>
                )}
            </nav>
        </header>
    );
}

export default Header;