const dbConnection = require('../../config/dbserver');
const { getEmprestimo, emprestimoPost } = require ('../models/emprestimo');

module.exports.listarEmprestimo = function(app, req, res) {
	let connection = dbConnection();
	getEmprestimo(connection, function (error, result){
		if(error){
			res.send(error);
		}else{
			res.send(result);
		}
	});
}

module.exports.postEmprestimo = function (app,req,res){
	let connection = dbConnection();
	emprestimoPost(req, connection,
		function(error, result) {
			if(error){
				
				res.send("Problema ao conectar");
				console.log(error);
			} else {
				res.send("Adicionado ao banco");
				console.log(result);
			}
	});
}