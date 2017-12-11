console.log('Seeing routes');
/**********************************************
        USERS, ect, ROUTES
**********************************************/
var Users = require('./../controllers/users.js')
/*********************************************/
module.exports = function(app){
    // USERS
	app.get('/users', Users.index);
	app.post('/users', Users.create);
	app.post('/sessions', Users.login);
	app.get('/users/:id', Users.show);
}
