import React, { useState } from 'react';
import { createListing } from '../../services/api';
import { useNavigate } from 'react-router-dom';

function PublishListing() {
    const [listing, setListing] = useState({
        title: '',
        description: '',
        instrumentType: '',
        price: '',
        images: []
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setListing(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        setListing(prev => ({ ...prev, images: Array.from(e.target.files) }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(listing).forEach(key => {
            if (key === 'images') {
                listing.images.forEach(image => formData.append('images', image));
            } else {
                formData.append(key, listing[key]);
            }
        });

        try {
            await createListing(formData);
            alert('Annonce publiée avec succès!');
            navigate('/listings');
        } catch (error) {
            console.error('Erreur lors de la publication:', error);
            alert('Erreur lors de la publication de l\'annonce');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" value={listing.title} onChange={handleChange} placeholder="Titre" required />
            <textarea name="description" value={listing.description} onChange={handleChange} placeholder="Description" required />
            <select name="instrumentType" value={listing.instrumentType} onChange={handleChange} required>
                <option value="">Sélectionnez un type d'instrument</option>
                <option value="guitar">Guitare</option>
                <option value="piano">Piano</option>
                <option value="drums">Batterie</option>
            </select>
            <input type="number" name="price" value={listing.price} onChange={handleChange} placeholder="Prix" required />
            <input type="file" accept="image/*" multiple onChange={handleImageChange} required />
            <button type="submit">Publier l'annonce</button>
        </form>
    );
}

export default PublishListing;