const dbConnection = require('../../config/dbserver');
const { getLogin } = require ('../models/login');
const controle = ([]);

module.exports.Logar = function(app, req, res) {
	let connection = dbConnection();
	getLogin(req, connection, function (error, result){
		if(error){
			res.send("Problemas ao conectar ao banco");
            console.log(error);
		}else{
			controle.pop();
			controle.push(result);
			res.send(result);
		}
	});
}

module.exports.getLogar = function(app, req, res){
	res.send(controle);
}

module.exports.getLogout  = function(app, req, res) {
        controle.pop();
        res.send(controle);
}