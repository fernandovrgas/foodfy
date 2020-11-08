exports.index = function(req,res) {
	return res.render('receitas/index');
}

exports.lista = function(req,res) {
	return res.render('receitas/lista');
}