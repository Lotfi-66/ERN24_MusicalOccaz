import React, { useState } from 'react';

function ListingForm({ onSubmit }) {
    const [listing, setListing] = useState({ title: '', price: '', description: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(listing);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Titre"
                value={listing.title}
                onChange={(e) => setListing({ ...listing, title: e.target.value })}
            />
            <input
                type="number"
                placeholder="Prix"
                value={listing.price}
                onChange={(e) => setListing({ ...listing, price: e.target.value })}
            />
            <textarea
                placeholder="Description"
                value={listing.description}
                onChange={(e) => setListing({ ...listing, description: e.target.value })}
            />
            <button type="submit">Publier l'annonce</button>
        </form>
    );
}

export default ListingForm;