console.log('Teams Controller');
let mongoose = require('mongoose');
/****************************************
            TEAM CONTROLLER
****************************************/
let Team = mongoose.model('Team');
let User = mongoose.model('User');

module.exports = {
    index: function(req, res){
        Team.find({}).exec(function (err, teams) {
            if (err) {
                return res.json(err);
            }
            return res.json(teams);
        })
    },
    create: function(req, res) {
        Team.create(req.body, function(err, team){
            if (err) {
                return res.json(err);
            }
            User.findById(req.body.user, function(err, user){
                if (err) {
                    return res.json(err);
                }
                user.teams.push(team._id)
                user.save(function(err, user){
                    if (err) {
                        return res.json(err);
                    }
                    return res.json(team);
                })
            })
        })
    },
    delete: function(req, res) {
        Team.findByIdAndRemove(req.params.id).exec(function(err, user){
            if(err){
                return res.json(err)
            }
            return res.json(team)
        })
    },
    show: function(req, res){
        Team.findById(req.params.id).exec(function(err, team){
            if(err){
                return res.json(err)
            }
            return res.json(user);
        })
    },
    update: function(req, res) {
        Team.findById(req.params.id).exec(function(err, team){
            if(err){
                return res.json(err)
            }
            let users =  req.body.users
            for (let i = 0; i < users.length; i++) {
                team.users.push(users[i].user)
            }
            team.save(function(err, team){
                if (err) {
                    return res.json(err)
                }
                return res.json(team)
            })
        })
    }
}
