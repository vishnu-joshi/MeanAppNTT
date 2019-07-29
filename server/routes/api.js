const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Input = require('../models/userentry');
const Loca = require('../models/loc');
const SuppCity = require('../models/SupportedCity');
const multer = require('multer');
const upld = multer({dest: './src/assets/uploads'}).single('csv');

//const db = "mongodb://videouser:please123@cluster0-shard-00-00-5ftnw.mongodb.net:27017,cluster0-shard-00-01-5ftnw.mongodb.net:27017,cluster0-shard-00-02-5ftnw.mongodb.net:27017/userinputdata?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
const db = "mongodb://ntt-test-user:internproject@cluster0-shard-00-00-5ftnw.mongodb.net:27017,cluster0-shard-00-01-5ftnw.mongodb.net:27017,cluster0-shard-00-02-5ftnw.mongodb.net:27017/Crime?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.Promise = global.Promise;


mongoose.connect(db, function(err, client) {

    if (err) {
        console.error("Error! " + err);
    } else {
        console.log("Success!");

    }

});

router.get('/userinputs', function(req, res) {

    console.log('Get request for all crime data');
    Loca.find({})
    .exec(function(err, inputs) {
        if (err) {
            console.log("Error retrieving user input " + err);
        } else {
            //console.log(userinputs);
            console.log('Tried to load into JSON');
            res.json(inputs)
        }
    });

    //res.send('api works');
});

router.get('/supportedcities', function(req, res) {

    console.log('Get request for all supportedcities');
    SuppCity.find({})
    .exec(function(err, inputs) {
        if (err) {
            console.log("Error retrieving user input " + err);
        } else {
            //console.log(userinputs);
            console.log('Tried to load into JSON');
            res.json(inputs)
        }
    });

    //res.send('api works');
});

router.post('/userinput', function(req, res) {
    console.log('Enter a user entry.');
    var newInput = new Input();
    newInput.input = req.body.input;
    console.log(newInput.input);
    //newInput.url = req.body.url;
    //newInput.description = req.body.description;
    newInput.save(function(err, insertedUserInput){
        if (err) {
            console.log('Error saving video');
        } else {
            res.json(insertedUserInput);
        }
    });
});

router.put('/userinput/:id', function(req, res){
    console.log('Update a video');
    Input.findByIdAndUpdate(req.params.id, {
        $Set: {input: req.body.input}
    },
    {
        new: true
    },
    function(err, updatedInput){
        if (err) {
            res.send("Error updating input.");
        } else {
            res.json(updatedInput);
        }
    });
});

router.post('/upload', function(req, res, next) {
    var path = '';
    upld(req, res, function(err) {
        if (err) {
            console.log(err);
            return res.status(422).send("Error occurred.");
        } else {
            path = req.file.path;
            return res.send("Upload completed for "+path);
        }
    });
});


module.exports = router;
