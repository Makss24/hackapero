/* ------------------------------------------------------------------------- *\
	 						   ROUTES PARTYS
\* ------------------------------------------------------------------------- */

var Party = require('../models/party.js');
var Auth = require('../middlewares/authorization.js');

module.exports = function(app, passport) {

	app.get('/partys', Party.findAll);

	app.get('/partys/:id', Party.findById);

	app.post('/partys', Party.create);

	app.put('/partys/:id', Party.update);

	app.delete('/partys/:id', Party.delete);
}