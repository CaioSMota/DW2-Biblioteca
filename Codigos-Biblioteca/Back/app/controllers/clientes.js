const dbConnection = require('../../config/dbserver');
const { getClientes, postClientes } = require ('../models/clientes');

module.exports.listarClientes = function(app, req, res) {
	let connection = dbConnection();
	getClientes(connection, function (error, result){
		if(error){
			res.send("Problemas ao conectar ao banco");
		}else{
			res.send(result);
		}
	});
}