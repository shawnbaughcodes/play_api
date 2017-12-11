console.log('Events Controller');
let mongoose = require('mongoose');
/****************************************
            Events CONTROLLER
****************************************/
let Event = mongoose.model('Event');

module.exports = {
    index: function(req, res){
        Event.find({}).exec(function(err, events) {
            if (err) {
                return res.json(err);
            }
            return res.json(events);
        })
    },
    create: function(req, res){
        let event = new Event(req.body)
        event.save(function(err, event){
            if (err) {
                return res.json(err)
            }
            return res.json(event)
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
            if (req.body.users > 0) {
                for(user in req.body.users){
                    event.users.push(user._id)
                }
            }
            for(team in req.body.teams){
                event.teams.push(team._id)
            }
            event.save(function(err, team){
                if (err) {
                    return res.json(err)
                }
                return res.json(event)
            })
        })
    }

}
