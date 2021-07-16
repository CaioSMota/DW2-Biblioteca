const dbConnection = require('../../config/dbserver');
const { clienteEdit } = require ('../models/editCliente');

module.exports.editCliente = function (app,req,res){
	let connection = dbConnection();
	clienteEdit(req, connection,
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