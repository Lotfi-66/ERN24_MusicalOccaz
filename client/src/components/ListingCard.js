import React from 'react';

function ListingCard({ listing }) {
    return (
        <div className="listing-card">
            <img src={listing.images[0]} alt={listing.title} />
            <h3>{listing.title}</h3>
            <p>{listing.price} €</p>
            <button>Voir détails</button>
        </div>
    );
}

export default ListingCard;