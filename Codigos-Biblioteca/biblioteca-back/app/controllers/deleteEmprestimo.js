const dbConnection = require('../../config/dbserver');
const { emprestimoDelete } = require ('../models/deleteEmprestimo');

module.exports.deleteEmprestimo = function (app,req,res){
	let connection = dbConnection();
	emprestimoDelete(req, connection,
		function(error, result) {
			if(error){
				res.send("Problema ao conectar");
				console.log(error);
			} else {
				res.send("Deletado");
				console.log(result);
			}
	});
}