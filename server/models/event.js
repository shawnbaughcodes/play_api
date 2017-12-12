console.log('Event model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

/**************************************
            EVENT SCHEMA
**************************************/

let EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must have event name.']
    },
    date: {
        type: String,
        required: [true, 'Please enter date.']
    },
    time: {
        type: String,
        required: [true, 'Please enter time.']
    },
    location: {
        type: String,
        required: [true, 'Please enter location.']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String,
        required: [true, 'Please write a description.']
    },
    sport: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sport'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }]
}, {timestamps: true})

let Event = mongoose.model('Event', EventSchema)
