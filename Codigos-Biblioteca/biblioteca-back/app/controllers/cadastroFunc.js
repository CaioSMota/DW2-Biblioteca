const dbConnection = require('../../config/dbserver');
const { funcPost } = require ('../models/cadastroFunc');

module.exports.postFunc = function (app,req,res){
	let connection = dbConnection();
	funcPost(req, connection,
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