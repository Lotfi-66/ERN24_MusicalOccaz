import React, { useState } from 'react';

function Register({ onRegister }) {
    const [user, setUser] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Appel à la fonction d'inscription
        await onRegister(user);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="Nom d'utilisateur"
                value={user.username}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={user.password}
                onChange={handleChange}
                required
            />
            <button type="submit">S'inscrire</button>
        </form>
    );
}

export default Register;