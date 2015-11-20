    // server.js

        // set up ============================
        var http     = require('http');
        var session  = require('express-session');
        var express  = require('express');
        var app      = express();                       // creer notre app w/ express
        var mongoose = require('mongoose');             // mongoose pour mongodb
        var port     = process.env.PORT || 8060;
        var morgan   = require('morgan');               // log request to the console (express4)
        var bodyParser = require('body-parser');        // tire les information venant de HTML POST (express4)
        var methodOverride = require('method-override'); // simule DELETE et PUT (express4)
        var passport = require('passport');

        // Mongoose ====================================================================
        require('./config/database');

        // Passport ====================================================================
        require('./config/passport')(passport);

        // Express ====================================================================

        app.use(express.static(__dirname + '/client'));                 // défini l'emplacement des fichiers static /public/img will be img for users
        app.use(morgan('dev'));                                         // log every request to the console
        app.use(bodyParser.urlencoded({'extented' :'true'}));           // parse application/x-form-urlencoded
        app.use(bodyParser.json());                                     // parse application/json
        app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json
        app.use(methodOverride());

        app.use(session({ secret: 'sampleSecretSession', resave: true, saveUninitialized: true }));
        app.use(passport.initialize());
        app.use(passport.session());

        // Serveur ====================================================================
        var server = http.Server(app);

        // listen (start app with node server.js) ===========================
        server.listen(port);
        console.log("App listening on port " + port);

        // Routes ==================================================================================
        require('./app/routes')(app, passport);

        process.on('SIGINT', function() {
            console.log("Stopping...");
            process.exit();
        });
