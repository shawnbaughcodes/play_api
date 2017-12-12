console.log('Team model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

/**************************************
            TEAM SCHEMA
**************************************/

let TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter team name.']
    },
    user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
    },
    sport: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sport',
        required: [true, 'Please enter a sport']
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {timestamps: true})

let Team = mongoose.model('Team', TeamSchema)
