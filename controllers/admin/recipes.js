const fs = require('fs'), // modulo file system
	  data = require('../../data.json')
;

exports.index = function(req,res) {
	return res.render('admin/recipes/index', { recipes: data.recipes });
}

exports.create = function(req, res) {
	return res.render('admin/recipes/create');
}

exports.show = function(req, res) {
	const { id } = req.params;
	const foundRecipe = data.recipes.find(function(recipe){
		return recipe.id == id;
	});
	if (!foundRecipe) return res.send('Recipe not found');

	const recipe = {
		...foundRecipe,
		age: age(foundRecipe.birth).iso,
		services: foundRecipe.services.split(','),
		created_at: Intl.DateTimeFormat('pt-BR').format(foundRecipe.created_at)
	}

	return res.render('recipes/show', { recipe });
}

exports.post = function(req, res) {
	const keys = Object.keys(req.body),
		  created_at = Date.now(),
		  id = Number(data.recipes.length + 1)
	;

	for (key of keys) {
		if (req.body[key] == '') {
			return res.send("Please, fill all fields");
		}
	}

	let { avatar_url, birth, name, services, gender } = req.body;

	birth = Date.parse(birth);

	data.recipes.push({
		id,
		name,
		avatar_url,
		birth,
		gender,
		services,
		created_at
	});

	fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err) {
		if (err) return res.send('Write file error!');
	});

	return res.redirect('/recipes');
}

exports.edit = function(req, res) {
	const { id } = req.params;

	const foundRecipe = data.recipes.find(function(recipe){
		return recipe.id == id;
	});
	if (!foundRecipe) return res.send('Recipe not found');

	foundRecipe.birth = date(foundRecipe.birth).iso;

	const recipe = {
		...foundRecipe,
		birth: foundRecipe.birth
	}

	console.log(recipe);

	return res.render('recipes/edit', { recipe });
}

exports.put = function(req, res) {
	const { id } = req.body;
	let index = 0;

	const foundRecipe = data.recipes.find(function(recipe, foundIndex){
		if (id == recipe.id) {
			index = foundIndex;
			return true;
		}
	});

	if (!foundRecipe) return res.send('Recipe not found');

	const recipe = {
		...foundRecipe,
		...req.body,
		birth: Date.parse(req.body.birth),
		id: Number(req.body.id)
	}

	data.recipes[index] = recipe;

	fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
		if (err) return res.send('Write error!');

		return res.redirect(`/recipes/${id}`);
	});
}

exports.delete = function(req,res) {
	const { id } = req.body;

	const filteredrecipes = data.recipes.filter(function(recipe){
		return recipe.id != id;
	});

	data.recipes = filteredrecipes;

	fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
		if (err) return res.send('Write file error');

		return res.redirect("/recipes");
	})
}