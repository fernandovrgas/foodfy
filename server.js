const express = require('express'),
	nunjucks = require('nunjucks'),
	routes = require('./routes'),
	server = express(),
	methodOverride = require('method-override')
;

server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));
server.use(methodOverride('_method'));
server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("views", {
	express:server,
	autoescape: false, // para não quebrar a definição de html nas variáveis para parser
	noCache: true
});

server.listen(5000, function(){
	console.log('Server is runing');
});