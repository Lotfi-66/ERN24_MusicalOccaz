import React from 'react';
import ListingCard from './listings/ListingCard';
import CreateListing from './CreateListing';

function Profile({ user, listings, onCreateListing }) {
    return (
        <div>
            <h2>Profil de {user.username}</h2>
            <CreateListing onCreateListing={onCreateListing} />
            <h3>Mes annonces</h3>
            <div className="listings">
                {listings.filter(listing => listing.userId === user.id).map(listing => (
                    <ListingCard key={listing.id} listing={listing} />
                ))}
            </div>
        </div>
    );
}

export default Profile;