import React, { useState } from 'react';

function CreateListing({ onCreateListing }) {
    const [listing, setListing] = useState({ title: '', price: '', description: '', image: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setListing(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateListing(listing);
        setListing({ title: '', price: '', description: '', image: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={listing.title}
                onChange={handleChange}
                placeholder="Titre de l'annonce"
                required
            />
            <input
                type="number"
                name="price"
                value={listing.price}
                onChange={handleChange}
                placeholder="Prix"
                required
            />
            <textarea
                name="description"
                value={listing.description}
                onChange={handleChange}
                placeholder="Description"
                required
            />
            <input
                type="url"
                name="image"
                value={listing.image}
                onChange={handleChange}
                placeholder="URL de l'image"
                required
            />
            <button type="submit">Publier l'annonce</button>
        </form>
    );
}

export default CreateListing;