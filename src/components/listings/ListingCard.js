import React from 'react';

function ListingCard({ listing }) {
    return (
        <div className="listing-card">
            <img src={listing.image} alt={listing.title} />
            <h3>{listing.title}</h3>
            <p>{listing.price} €</p>
        </div>
    );
}

export default ListingCard;