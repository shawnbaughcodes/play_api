console.log('Post model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

/**************************************
            POST SCHEMA
**************************************/

let PostSchema = new mongoose.Schema({
    content: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    like: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Likes'
    }
}, {timestamps: true})

let Post = mongoose.model('Post', PostSchema);
