console.log('Seeing routes');
/**********************************************
        		ROUTES
**********************************************/
const jwt = require('jsonwebtoken');
const Users = require('./../controllers/users.js');
const Sports = require('./../controllers/sports.js');
const Posts = require('./../controllers/posts.js');
const Teams = require('./../controllers/teams.js');
const Events = require('./../controllers/events.js');
const base = require('../controllers/base');
/*********************************************/
module.exports = function(app){
    	// USERS

	app.get('/', Users.home);
	app.get('/users/all/:id', Users.index);
	app.post('/users/', Users.create);
	app.post('/sessions', Users.login);
	app.get('/users/:id', Users.show);
	app.post('/users/add/:id', Users.addfriend);
	app.delete('/users/:id', Users.delete);
	app.get('/users/logout/:id', Users.logout);
	// SPORTS
	app.get('/sports/all/:id', Sports.index);
	app.post('/sports/:id', Sports.create);
	app.post('/sports/:id', Sports.add);
	// POSTS
	app.get('/posts/all/:id', Posts.index);
	app.post('/posts/:id', Posts.create);
	app.get('/posts/:id', Posts.show);
	app.delete('/posts/:id', Posts.delete);
	// TEAMS
	app.get('/teams/all/:id', Teams.index);
	app.post('/teams/:id', Teams.create);
	app.delete('/teams/:id', Teams.delete);
	app.get('/teams/:id', Teams.show);
	app.put('/teams/:id', Teams.update);
	// EVENTS
	app.get('/events/all/:id', Events.index);
	app.post('/events/:id', Events.create);
	app.delete('/events/:id', Events.delete);
	app.get('/events/:id', Events.show);
	app.put('/events/:id', Events.update);
}
