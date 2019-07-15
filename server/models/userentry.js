const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userInput = new Schema({
    input: String
});

module.exports = mongoose.model('userentry', userInput, 'userinputs');
