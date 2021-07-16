const dbConnection = require('../../config/dbserver');
const { getClientes, postClientes, getProcuraCliente } = require ('../models/clientes');

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

module.exports.listarProcuraCliente = function (app,req,res){
	let connection = dbConnection();
	getProcuraCliente(req, connection, function(error, result) {
			if(error){
			res.send(error);
		}else{
			res.send(result);
		}
	});
	}