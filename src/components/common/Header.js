import React from 'react';
import { Link } from 'react-router-dom';

function Header({ user, onLogout }) {
    return (
        <header>
            <nav>
                <Link to="/">MusicalOccaz</Link>
                {user ? (
                    <>
                        <Link to="/profile">Profil</Link>
                        <button onClick={onLogout}>Déconnexion</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Connexion</Link>
                        <Link to="/register">Inscription</Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;