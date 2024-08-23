import React, { useState } from 'react';

function Register({ onRegister }) {
    const [userData, setUserData] = useState({ username: '', password: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(userData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
                placeholder="Nom d'utilisateur"
                required
            />
            <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Mot de passe"
                required
            />
            <button type="submit">S'inscrire</button>
        </form>
    );
}

export default Register;