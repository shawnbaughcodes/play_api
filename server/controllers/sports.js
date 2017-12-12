console.log('Sports Controller');
let mongoose = require('mongoose');

/****************************************
            SPORTS CONTROLLER
****************************************/
let Sport = mongoose.model('Sport');
let User = mongoose.model('User');

module.exports = {
    index: function(req, res){
        Sport.find({}).exec(function(err, sports) {
            if(err){
                return res.json(err)
            }
            return res.json(sports);
        })
    },
    add: function(req, res) {
        Sport.findById(req.params.id, function(err, sport) {
            if(err){
                return res.json(err)
            }
            User.findById(req.body.user, function(err, user){
                if (err) {
                    return res.json(err)
                }
                sport.users.push(user.id)
                user.sports.push(sport.id)
                user.save(function(err, user){
                    if (err) {
                        return res.json(err)
                    }
                    return res.json(sport)
                })
            })
        })
    },
    create: function(req, res) {
        let sport = new Sport(req.body)
        sport.save(function(err, sport){
            if(err){
                return res.json(err)
            }
            return res.json(sport)
        })
    }
}
