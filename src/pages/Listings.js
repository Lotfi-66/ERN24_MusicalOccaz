import React from 'react';
import ListingCard from '../components/listings/ListingCard';

function Listings() {
    const dummyListings = [
        { id: 1, title: "Guitare électrique", price: 300, image: "url_image" },
        { id: 2, title: "Piano numérique", price: 500, image: "url_image" },
    ];

    return (
        <div className="listings">
            <h2>Annonces récentes</h2>
            {dummyListings.map(listing => (
                <ListingCard key={listing.id} listing={listing} />
            ))}
        </div>
    );
}

export default Listings;