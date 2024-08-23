import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import UserProfile from './pages/UserProfile';
import PublishListing from './components/listings/PublishListing';
import { AuthProvider } from './context/AuthContext';
import './styles/global.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/listings" element={<Listings />} />
                            <Route path="/profile" element={<UserProfile />} />
                            <Route path="/publish" element={<PublishListing />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;