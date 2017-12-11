console.log('Seeing routes');
/**********************************************
        		ROUTES
**********************************************/
const Users = require('./../controllers/users.js')
const Sports = require('./../controllers/sports.js')
const Posts = require('./../controllers/posts.js')
const Teams = require('./../controllers/teams.js')
const Events = require('./../controllers/events.js')
/*********************************************/
module.exports = function(app){
    	// USERS
	app.get('/users', Users.index);
	app.post('/users', Users.create);
	app.post('/sessions', Users.login);
	app.get('/users/:id', Users.show);
	app.delete('/users/:id', Users.delete)
    	// SPORTS
	app.get('/sports', Sports.index);
	app.post('/sports', Sports.create);
	app.post('/sports/:id', Sports.add);
    	// POSTS
	app.get('/posts', Posts.index);
	app.post('/posts', Posts.create);
	app.get('/posts/:id', Posts.show);
	app.delete('/posts/:id', Posts.delete);
		// TEAMS
	app.get('/teams', Teams.index);
	app.post('/teams', Teams.create);
	app.delete('/teams/:id', Teams.delete);
	app.get('/teams/:id', Teams.show);
	app.put('/teams/:id', Teams.update);
		// EVENTS
	app.get('/events', Events.index);
	app.post('/events', Events.create);
	app.delete('/events', Events.delete);
	app.get('/events/:id', Events.show);
	app.put('/events/:id', Events.update);
}
