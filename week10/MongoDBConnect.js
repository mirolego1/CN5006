const mongoose = require('mongoose');

const MONG_URI= 'mongodb://localhost:27017/BooksData'

mongoose.connect(MONG_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch((err) => console.error('Error occurred while connecting to MongoDB:', err));

const db = mongoose.connection;

db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

db.once('open', () => {
    console.log('MongoDB connection is open');
});

module.exports = db;
