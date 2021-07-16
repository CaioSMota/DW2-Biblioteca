const dbConnection = require('../../config/dbserver');
const { livrosDelete } = require ('../models/deleteLivros');

module.exports.deleteLivro = function (app,req,res){
	let connection = dbConnection();
	livrosDelete(req, connection,
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