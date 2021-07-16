const dbConnection = require('../../config/dbserver');
const { clientePost } = require ('../models/cadastroCliente');

module.exports.postCliente = function (app,req,res){
	let connection = dbConnection();
	clientePost(req, connection,
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