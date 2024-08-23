const express = require('express');
const mongoose = require('mongoose');
const listingsRoutes = require('./routes/listings');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api/listings', listingsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));