console.log('Sport model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

/**************************************
            SPORT SCHEMA
**************************************/

let SportSchema = new mongoose.Schema({
    name: {
        type: String
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
}, {timestamps: true})

let Sport = mongoose.model('Sport', SportSchema)
