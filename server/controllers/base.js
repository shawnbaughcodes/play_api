const jwt = require('jsonwebtoken');
let express = require('express');
const verify =  require('./verifyToken');
const router = express.Router();

module.exports = function(token) {
    try {
        let token = jwt.verify(token, 'no-secret')
    } catch (e) {
        return false
    }
    return true
}
