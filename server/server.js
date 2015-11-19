    // server.js

        // set up ============================
        var express  = require('express');
        var app      = express();                       // creer notre app w/ express
        var mongoose = require('mongoose');             // mongoose pour mongodb
        var port     = process.env.PORT || 8060;
        var morgan   = require('morgan');               // log request to the console (express4)
        var bodyParser = require('body-parser');        // tire les information venant de HTML POST (express4)
        var methodOverride = require('method-override'); // simule DELETE et PUT (express4)

        // configuration =====================

        // load the config
        var database = require('./config/database');

        mongoose.connect(database.url);

        app.use(express.static(__dirname + '/public'));                 // défini l'emplacement des fichiers static /public/img will be img for users
        app.use(morgan('dev'));                                         // log every request to the console
        app.use(bodyParser.urlencoded({'extented' :'true'}));           // parse application/x-form-urlencoded
        app.use(bodyParser.json());                                     // parse application/json
        app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json
        app.use(methodOverride());

        // listen (start app with node server.js) ===========================
        app.listen(port);
        console.log("App listening on port " + port);

        // routes ==================================================================================

        // load the routes
        require('./app/routes')(app);
