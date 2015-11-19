/* -------------------------------------------------------- *\
							MODEL PARTY
\* -------------------------------------------------------- */

var mangoose = require('mangoose');

var partySchema = new mangoose.Shema({
	photo: String,
	date: Integer,
	nbparticipant: Integer,
	prix: Integer,
	lieu: String,
	nomsoiree: String,
	description: String
});

var Party = {
	model: mangoose.model('Party', partySchema),

	create: function(req, res) {
		Party.model.create({
			photo: req.body.photo,
			date: req.body.date,
			nbparticipant: req.body.nbparticipant,
			prix: req.body.prix,
			lieu: req.body.lieu,
			nomsoiree: req.body.nomsoiree,
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
}

