const dbConnection = require('../../config/dbserver');
const { livrosPost } = require ('../models/cadastroLivro');

module.exports.postLivro = function (app,req,res){
	let connection = dbConnection();
	livrosPost(req, connection,
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