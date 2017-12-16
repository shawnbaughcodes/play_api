console.log('Users Controller');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyToken');
const config = require('./config');
const base = require('./base');
/****************************************
            USERS CONTROLLER
****************************************/
let User = mongoose.model('User');
function check() {
    if (res.status == 404) {
        return res.redirect('/')
    }
}
module.exports = {
    home: function(req, res){
        return res.render('/')
    },
    index: function(req, res){
        check()
        User.findById(req.params.id).exec(function(err, user) {
            if (err) {
                return res.redirect('/')
            }
            User.find({}).exec(function (err, users) {
                if(err){
                    return res.redirect('/')
                }
                return res.json(users);
            })
        })
    },
    create: function(req,res){
        let user = new User(req.body)
        User.create(req.body, function(err, user){
            if(err){
                return res.json(err)
            }
        },
        function(err, user) {
            const token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 86400
            });
            res.send({ auth: true, token: token, user: user.email})
        }
    )
    },
    delete: function(req, res){
        User.findByIdAndRemove(req.params.id).exec(function(err, user){
            if(err){
                return res.json(err)
            }
            return res.json(user)
        })
    },
    show: function(req,res){
        //your code here
        User.findById(req.params.id).exec(function(err, user){
            if(err){
                return res.json(err)
            }
            return res.json(user);
        })
    },
    login: function(req, res) {
        User.findOne({email: req.body.email}, function(err, user){
            if(err){
                return res.json(err)
            }
            if (user && user.authenticate(req.body.password)) {
                const token = jwt.sign({ id: user._id }, config.secret, {
                    expiresIn: 86400
                })
                return res.json({auth: true, token: token, user: user})
            } else {
                return res.json({
                    "errors":{
                        "password":{
                            "message": "Invalid credientials."
                        }
                    }
                })
            }
        })
    },
    addfriend: function(req, res) {
        User.findById(req.params.id).exec(function(err, user){
            if (err) {
                return res.json(err)
            }
            user.friends.push(user.id)
            user.save(function(err, user){
                if (err) {
                    return res.json(err)
                }
                return res.json(user)
            })
        })
    },
    logout: function(req, res) {
        User.findById(req.params.id).exec(function(err, user) {
            if (err) {
                return res.json(err)
            }
            return res.render('/')
        })
    }
}
