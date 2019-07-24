const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const location = new Schema({
    city: String,
    date: Number,
    latitude: Number,
    longitude: Number,
    typeOfCrime: String
});

module.exports = mongoose.model('location', location, 'CityCrimes');