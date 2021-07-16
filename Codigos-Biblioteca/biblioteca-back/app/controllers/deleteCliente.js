const dbConnection = require('../../config/dbserver');
const { clienteDelete } = require ('../models/deleteCliente');

module.exports.deleteCliente = function (app,req,res){
	let connection = dbConnection();
	clienteDelete(req, connection,
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