const dbConnection = require('../../config/dbserver');
const { getLivros, postLivros } = require ('../models/livros');

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

