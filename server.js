    var express = require('express');
    var bodyParser = require('body-parser');
    var exphbs     = require("express-handlebars");var app = express();
    var exprApp    = express();


    app.use(express.static(process.cwd() + '/public'));
    exprApp.engine('handlebars', exphbs({ defaultLayout: 'main' }));
    exprApp.set('view engine', 'handlebars');app.use(bodyParser.urlencoded({
	extended: false
}))

// override with POST having ?_method=DELETE
    var exphbs = require('express-handlebars');
    app.engine('handlebars', exphbs({
        defaultLayout: 'main'
}));
    app.set('view engine', 'handlebars');

    var routes = require('./controller/burgers_controller.js');
    app.use('/', routes);

    var port = process.env.port || 3000;
    app.listen(port);
