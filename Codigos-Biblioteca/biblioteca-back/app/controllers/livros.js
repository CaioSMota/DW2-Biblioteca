const dbConnection = require('../../config/dbserver');
const { getLivros, postLivros, getProcuraLivro } = require ('../models/livros');

module.exports.listarLivro = function(app, req, res) {
	let connection = dbConnection();
	getLivros(connection, function (error, result){
		if(error){
			res.send("Problemas ao conectar ao banco");
		}else{
			res.send(result);
		}
	});
}

module.exports.listarProcuraLivro = function (app,req,res){
	let connection = dbConnection();
	getProcuraLivro(req, connection, function(error, result) {
			if(error){
			res.send(error);
		}else{
			res.send(result);
		}
	});
}

