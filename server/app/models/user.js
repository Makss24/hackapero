/* -------------------------------------------------------- *\
							MODEL USER
\* -------------------------------------------------------- */

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	nom: String,
	prenom: String,
	age: Number,
	photo: String,
	description: String,
	mail: String,
	mdp: String,
	admin: Boolean
}, {

	versionKey: false
	
});

var User = {
		model: mongoose.model('User', userSchema),

		create: function(req, res) {
			User.model.create({
				nom: req.body.nom,
				prenom: req.body.prenom,
				age: req.body.age,
				photo: req.body.photo,
				description: req.body.description,
				mail: req.body.mail,
				mdp: req.body.mdp,
				admin: req.body.admin
			}, function(err, user){
				res.json(user);
				});
	},

		update: function(req, res) {
			User.model.update({
				nom: req.body.nom,
				prenom: req.body.prenom,
				age: req.body.age,
				photo: req.body.photo,
				description: req.body.description,
				mail: req.body.mail,
				mdp: req.body.mdp,
				admin: req.body.admin
			}, function(err, user) {
				res.json(user);
			});
	},

		findAll: function(req, res) {
			User.model.find({}, function (err, users) {
				res.json(users);
			});
	},

		findById: function(req, res) {
			User.model.findById(req.headers.id, function (err, user) {
				res.json(user);
			});
		},

		delete: function(req, res){
			User.model.findByIdAndRemove(req.params.id, function(){
				res.sendStatus(200);
		})
	}
}

module.exports = User;