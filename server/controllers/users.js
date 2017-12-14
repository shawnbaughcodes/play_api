console.log('Users Controller');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
/****************************************
            USERS CONTROLLER
****************************************/
let User = mongoose.model('User');

module.exports = {
    home: function(req, res){
        res.render('index')
    },
    index: function(req,res){
        console.log("index");
        User.find({}).exec(function (err, users) {
            if(err){
                return res.json(err)
            }
            return res.json(users);
        })
    },
    create: function(req,res){
        let user = new User(req.body)
        user.save(function(err, user){
            if(err){
                return res.json(err)
            }
            const token = jwt.sign({ id: req.body.user._id }, config.secret, {
                expiresIn: 86400
            });
            
            return res.json(user)
        })
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
            if(user && user.authenticate(req.body.password)){
                return res.json(user)
            } else{
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
    }
}
