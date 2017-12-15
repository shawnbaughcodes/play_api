console.log('Events Controller');
let mongoose = require('mongoose');
/****************************************
            Events CONTROLLER
****************************************/
let Event = mongoose.model('Event');
let User = mongoose.model('User');
let Team = mongoose.model('Team');

module.exports = {
    index: function(req, res){
        User.findById(req.params.id).exec(function(err, user) {
            if (err) {
                return res.redirect('/')
            }
            Event.find({}).exec(function(err, events) {
                if (err) {
                    return res.json(err);
                }
                return res.json(events);
            })
        })
    },
    create: function(req, res){
        User.findById(req.params.id).exec(function(err, user) {
            if (err) {
                return res.redirect('/')
            }
            Event.create(req.body, function(err, event) {
                if (err) {
                    return res.json(err)
                }
                User.findById(req.body.user, function(err, user) {
                    if (err) {
                        return res.json(err)
                    }
                    user.events.push(event.id)
                    user.save(function(err, user){
                        if (err) {
                            return res.json(err)
                        }
                        return res.json(event)
                    })
                })
            })
            let event = new Event(req.body)
            event.save(function(err, event){
                if (err) {
                    return res.json(err)
                }
                return res.json(event)
            })
        })
    },
    delete: function(req, res){
        Event.findByIdAndRemove(req.params.id).exec(function(err, event){
            if (err) {
                return res.json(err)
            }
            return res.json(event)
        })
    },
    show: function(req, res){
        Event.findById(req.params.id).exec(function(err, event){
            if (err) {
                return res.json(err)
            }
            return res.json(event)
        })
    },
    update: function(req, res){
        Event.findById(req.params.id).exec(function(err, event){
            if (err) {
                return res.json(err)
            }
            let users = req.body.users
            for(let i = 0; i < users; i++){
                event.users.push(user[i].user)
            }
            let teams = req.body.teams
            for (let i = 0; i < teams.length; i++) {
                event.teams.push(teams[i].team);
            }
            event.save(function(err, event){
                if (err) {
                    return res.json(err)
                }
                return res.json(event)
            })
        })
    }
}
