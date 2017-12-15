console.log('Posts Controller');
let mongoose = require('mongoose');
/****************************************
            USERS CONTROLLER
****************************************/
let Post = mongoose.model('Post');
let User = mongoose.model('User');

module.exports = {
    index: function(req, res){
        User.findById(req.params.id).exec(function(err, user) {
            if (err) {
                return res.redirect('/')
            }
            Post.find({}).exec(function (err, posts) {
                if (err) {
                    return res.json(err)
                }
                return res.json(posts)
            })
        })
    },
    create: function(req, res){
        User.findById(req.params.id).exec(function(err, user) {
            if (err) {
                return res.redirect('/')
            }
            Post.create(req.body, function(err, post){
                if (err) {
                    return res.json(err);
                }
                User.findById(req.body.user, function(err, user){
                    if (err) {
                        return res.json(err);
                    }
                    user.posts.push(post._id)
                    user.save(function(err, user){
                        if (err) {
                            return res.json(err);
                        }
                        return res.json(post);
                    })
                })
            })
        })
    },
    show: function(req, res){
        Post.findById(req.params.id).exec(function(err, post){
            if (err) {
                return res.json(err)
            }
            return res.json(post)
        })
    },
    delete: function(req, res) {
        Post.findByIdAndRemove(req.params.id).exec(function(err, post){
            if (err) {
                return res.json(err)
            }
            return res.json(post)
        })
    }
}
