const jwt = require('jsonwebtoken');
const config = require('./config');

function verifyToken(req, res, next) {
    let token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send({ auth: false, message: 'No token'});
    }

    jwt.verify(token, config.secret, function(err, decoded) {
        if(err) {
            return res.json(err).send({ auth: false, message: 'failed to auth'})
        }

        req.body.user._id = decoded.id
        next();
    })
}
module.exports = verifyToken;
