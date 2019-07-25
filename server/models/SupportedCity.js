const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SupportedCity = new Schema({
    cityname: String,
    centerlat: Number,
    centerlong: Number
});

module.exports = mongoose.model('supportedcity', SupportedCity, 'SupportedCities');