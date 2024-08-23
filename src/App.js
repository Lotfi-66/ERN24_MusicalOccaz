import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/common/Header';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Profile from './components/Profile';
import ListingCard from './components/listings/ListingCard';
import './App.css';

function App() {
    const [user, setUser] = useState(null);
    const [listings, setListings] = useState([]);

    const handleLogin = (credentials) => {
        // Simuler une connexion (à remplacer par une vraie authentification)
        setUser({ id: Date.now(), username: credentials.username });
    };

    const handleRegister = (userData) => {
        // Simuler une inscription (à remplacer par une vraie inscription)
        setUser({ id: Date.now(), username: userData.username });
    };

    const handleLogout = () => {
        setUser(null);
    };

    const handleCreateListing = (newListing) => {
        setListings(prev => [...prev, { ...newListing, id: Date.now(), userId: user.id }]);
    };

    return (
        <Router>
            <div className="App">
                <Header user={user} onLogout={handleLogout} />
                <Switch>
                    <Route exact path="/">
                        <h1>MusicalOccaz</h1>
                        <div className="listings">
                            {listings.map(listing => (
                                <ListingCard key={listing.id} listing={listing} />
                            ))}
                        </div>
                    </Route>
                    <Route path="/login">
                        {user ? <Redirect to="/profile" /> : <Login onLogin={handleLogin} />}
                    </Route>
                    <Route path="/register">
                        {user ? <Redirect to="/profile" /> : <Register onRegister={handleRegister} />}
                    </Route>
                    <Route path="/profile">
                        {user ? (
                            <Profile user={user} listings={listings} onCreateListing={handleCreateListing} />
                        ) : (
                            <Redirect to="/login" />
                        )}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;