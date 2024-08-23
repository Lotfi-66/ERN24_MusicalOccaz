import React, { useState } from 'react';

function Login({ onLogin }) {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(credentials);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                placeholder="Nom d'utilisateur"
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
            <button type="submit">Connexion</button>
        </form>
    );
}

export default Login;