const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const userRoutes = require('./src/routes/userRoutes');
const listingRoutes = require('./src/routes/listingRoutes');

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.use(cors());
app.use(express.json());

// Servir les fichiers statiques du build React
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/users', userRoutes);
app.use('/api/listings', listingRoutes);

// Gestion des routes pour l'application React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));