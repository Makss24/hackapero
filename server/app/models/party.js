/* -------------------------------------------------------- *\
							MODEL PARTY
\* -------------------------------------------------------- */

var mongoose = require('mongoose');

var partySchema = new mongoose.Schema({
	photo: String,
	date: Date,
	nbParticipant: Number,
	prix: Number,
	lieu: String,
	nomSoiree: String,
	description: String
}, {

	versionKey: false

});

var Party = {
	model: mongoose.model('Party', partySchema),

	create: function(req, res) {
		Party.model.create({
			photo: req.body.photo,
			date: req.body.date,
			nbParticipant: req.body.nbParticipant,
			prix: req.body.prix,
			lieu: req.body.lieu,
			nomSoiree: req.body.nomSoiree,
			description: req.body.description
		},function(err, party){
			res.json(party);
			});
	},

	findAll: function(req, res) {
		Party.model.find({}, function (err, partys) {
			res.json(party);
		});
	},

	findById: function(req, res) {
		Party.model.findById(req.headers.id, function (err, party) {
			res.json(party);
		});
	},

	update: function(req, res) {
		Party.model.update({
			photo: req.body.photo,
			date: req.body.date,
			nbParticipant: req.body.nbParticipant,
			prix: req.body.prix,
			lieu: req.body.lieu,
			nomSoiree: req.body.nomSoiree,
			description: req.body.description
		},function(err, party){
			res.json(party);
		});
	},

	delete: function(req, res){
		Party.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	}
}

module.exports = Party;