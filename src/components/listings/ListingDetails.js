import React from 'react';

function ListingDetails({ listing }) {
    return (
        <div className="listing-details">
            <h2>{listing.title}</h2>
            <img src={listing.image} alt={listing.title} />
            <p>Prix: {listing.price} €</p>
            <p>{listing.description}</p>
        </div>
    );
}

export default ListingDetails;