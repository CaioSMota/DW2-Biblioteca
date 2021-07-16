const dbConnection = require('../../config/dbserver');
const { funcionarioEdit } = require ('../models/editFuncionario');

module.exports.editFuncionario = function (app,req,res){
	let connection = dbConnection();
	funcionarioEdit(req, connection,
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