console.log('Posts Controller');
let mongoose = require('mongoose');
/****************************************
            USERS CONTROLLER
****************************************/
let Post = mongoose.model('Post');

module.exports = {
    index: function(req, res){
        Event.finc({}).exec(function (err, events) {
            if (err) {
                return res.json(err)
            }
            return res.json(posts)
        })
    },
    create: function(req, res){
        let post = new Post(req.body)
        post.save(function(err, post){
            if(err){
                return res.json(err)
            }
            return res.json(post)
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
