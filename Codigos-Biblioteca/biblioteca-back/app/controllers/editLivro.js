const dbConnection = require('../../config/dbserver');
const { livrosEdit } = require ('../models/editLivro');

module.exports.editLivro = function (app,req,res){
	let connection = dbConnection();
	livrosEdit(req, connection,
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