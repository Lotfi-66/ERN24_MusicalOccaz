import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import global from '../../styles/global.css';

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [credentials, setCredentials] = useState({ username: '', email: '', password: '' });
    const { login, register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let success;
            if (isLogin) {
                success = await login(credentials.email, credentials.password);
            } else {
                success = await register(credentials.username, credentials.email, credentials.password);
            }
            if (success) {
                navigate('/');  // Rediriger vers la page d'accueil après connexion/inscription
            } else {
                alert(isLogin ? 'Échec de la connexion' : 'Échec de l\'inscription');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Une erreur est survenue');
        }
    };

    return (
        <div className="auth-form">
            <h2>{isLogin ? 'Connexion' : 'Inscription'}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        placeholder="Nom d'utilisateur"
                        required
                    />
                )}
                <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Mot de passe"
                    required
                />
                <button type="submit">{isLogin ? 'Se connecter' : 'S\'inscrire'}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)} className="toggle-auth-mode">
                {isLogin ? 'Créer un compte' : 'Déjà un compte ? Se connecter'}
            </button>
        </div>
    );
}

export default Login;