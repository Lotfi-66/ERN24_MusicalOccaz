import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Register() {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        profilePicture: null
    });
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setUserData(prev => ({ ...prev, profilePicture: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('username', userData.username);
            formData.append('email', userData.email);
            formData.append('password', userData.password);
            if (userData.profilePicture) {
                formData.append('profilePicture', userData.profilePicture);
            }

            const success = await register(formData);
            if (success) {
                navigate('/profile');
            } else {
                alert('Échec de l\'inscription');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Une erreur est survenue');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <h2>Inscription</h2>
            <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
                placeholder="Pseudo"
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
            <input
                type="file"
                name="profilePicture"
                onChange={handleFileChange}
                accept="image/*"
            />
            <button type="submit">S'inscrire</button>
        </form>
    );
}

export default Register;