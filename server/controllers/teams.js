console.log('Teams Controller');
let mongoose = require('mongoose');
/****************************************
            TEAM CONTROLLER
****************************************/
let Team = mongoose.model('Team');

module.exports = {
    index: function(req, res){
        Team.finf({}).exec(function (err, teams) {
            if (err) {
                return res.json(err)
            }
            return res.json(teams)
        })
    },
    create: function(req, res) {
        let team = new Team(req.body)
        team.save(function(err, team){
            if(err){
                return res.json(err)
            }
            return res.json(team)
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
            for (user in req.body.users) {
                team.users.push(user._id)
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
