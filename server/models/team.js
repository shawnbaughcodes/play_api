console.log('Team model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

/**************************************
            TEAM SCHEMA
**************************************/

let TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter team name.']
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
