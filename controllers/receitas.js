const data = require('../data');

exports.index = function(req,res) {
	const limit = 5;
	const receitas = [];

	data.forEach((element, index) => {
		if (index <= limit) {
			element.index = index;
			receitas.push(element);
		}
	});

	return res.render('receitas/index', { receitas });
}

exports.lista = function(req,res) {
	const receitas = [];

	data.forEach((element, index) => {
		element.index = index;
		receitas.push(element);

	});

	return res.render('receitas/lista', { receitas });
}

exports.show = function(req, res) {
	const receita = data[req.params.index];
	return res.render('receitas/ver', { receita });
}