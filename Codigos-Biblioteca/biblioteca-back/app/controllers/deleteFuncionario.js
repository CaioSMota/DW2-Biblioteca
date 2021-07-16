const dbConnection = require('../../config/dbserver');
const { funcionarioDelete } = require ('../models/deleteFuncionario');

module.exports.deleteFuncionario = function (app,req,res){
	let connection = dbConnection();
	funcionarioDelete(req, connection,
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