import React from 'react';
import ListingCard from './components/ListingCard';

function App() {
    const dummyListing = {
        title: "Guitare électrique Fender Stratocaster",
        price: 800,
        images: ["https://example.com/strat.jpg"]
    };

    return (
        <div className="App">
            <h1>MusicalOccaz</h1>
            <ListingCard listing={dummyListing} />
        </div>
    );
}

export default App;