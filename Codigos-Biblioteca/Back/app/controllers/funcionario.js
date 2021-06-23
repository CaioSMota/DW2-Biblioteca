const dbConnection = require('../../config/dbserver');
const { getFunc, postFunc } = require ('../models/funcionario');

module.exports.listarFuncionarios = function(app, req, res) {
	let connection = dbConnection();
	getFunc(connection, function (error, result){
		if(error){
			res.send("Problemas ao conectar ao banco");
		}else{
			res.send(result);
		}
	});
}