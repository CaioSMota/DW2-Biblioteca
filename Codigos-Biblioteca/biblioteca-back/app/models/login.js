module.exports = {
	getLogin : function(req, connection, callback){ 
		let sql = "SELECT tipo_func FROM funcionario WHERE email_func = '" + req.body.usuario + "' AND senha = '" + req.body.senha + "';";
		connection.query(sql, callback);
	}
}