console.log('Users model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

/**************************************
            USER SCHEMA
**************************************/

var UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Must have full name.']
    },
    lastname: {
        type: String,
        required: [true, 'Must have a full name']
    },
    email: {
        type: String,
        required: [true, 'Must have Email'],
        validate: {
            validator: function(v){
                return /\w+@\w+.\w+/g.test(v);
            },
            message: 'Email must be valid.',
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Must enter a Password']
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Friend'
    }],
    sports: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sport'
    }],
    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }],
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
}, {timestamps: true})

UserSchema.methods.hashPassword = function (password) {
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}
UserSchema.methods.authenticate = function (password) {
    return bcrypt.compareSync(password, this.password);
}
UserSchema.pre('save', function(callback) {
    this.hashPassword(this.password);
    callback();
});

var User = mongoose.model('User', UserSchema)
