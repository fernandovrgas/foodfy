const express = require('express'),
	  routes = express.Router(),
	  receitas = require('./controllers/receitas'),
	  recipes = require('./controllers/admin/recipes')
;

routes.get('/', receitas.index);
routes.get('/receitas', receitas.lista);
routes.get('/receitas/:index', receitas.show);

routes.get('/sobre', function(req,res) {
	return res.render('sobre');
});

// Área administrativa
routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

module.exports = routes;