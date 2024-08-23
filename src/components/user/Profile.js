import React from 'react';

function Profile({ user }) {
    return (
        <div className="profile">
            <h2>Profil de {user.username}</h2>
            <p>Email: {user.email}</p>
            {/* Ajoutez d'autres informations de profil ici */}
        </div>
    );
}

export default Profile;