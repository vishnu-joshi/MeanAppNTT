const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const location = new Schema({
    incident_id: Number,
    case_number: String,
    incident_datetime: String,
    incident_type_primary: String,
    incident_description: String,
    clearance_type: String,
    address_1: String,
    city: String,
    state: String,
    latitude: String,
    longitude: String,
    created_at: String,
    updated_at: String,
    location: Object,
    hour_of_day: Number,
    day_of_week: Number,
    parent_incident_type: String
});

module.exports = mongoose.model('location', location, 'riversidejson');