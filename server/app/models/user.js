/* -------------------------------------------------------- *\
							MODEL USER
\* -------------------------------------------------------- */

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	nom: String,
	prenom: String,
	age: Integer,
	photo: String,
	description: String,
	mail: String,
	mdp: String,
	admin: Boolean
});

var User = {
		model: mongoose.model('User', userSchema),

		create: function(req, res) {
			User.model.create({
				nom: req.body.name_user,
				prenom: req.body.prenom_user,
				age: req.body.age_user,
				photo: req.body.photo_user,
				description: req.body.description_user,
				mail: req.body.mail_user,
				mdp: req.body.mdp_user,
				admin: req.body.admin
			}, function(err, user){
				res.json(user);
				});
	},

		update: function(req, res) {
			User.model.update({
				nom: req.body.name_user,
				prenom: req.body.prenom_user,
				age: req.body.age_user,
				photo: req.body.photo_user,
				description: req.body.description_user,
				mail: req.body.mail_user,
				mdp: req.body.mdp_user,
				admin: req.body.admin
			}, function(err, user) {
				res.json(user);
			});
	},

		findAll: function(req, res) {
			User.model.find({}, function (err, users) {
				res.json(user);
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