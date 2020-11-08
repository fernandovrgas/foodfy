const express = require('express'),
	  routes = express.Router(),
	  receitas = require('./controllers/receitas')
;

routes.get('/', receitas.index);
routes.get('/receitas', receitas.lista);

routes.get('/sobre', function(req,res) {
	return res.render('sobre');
});

module.exports = routes;