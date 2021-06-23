module.exports = {
	getFunc : function(connection, callback){
		let sql = 'SELECT * FROM funcionario;';
		connection.query(sql, callback);
	},
	postFunc : function(connection, callback, email, senha, tipo_func, nome_func, img_func){
		let sql = 'INSERT INTO funcionario(email_func, senha, tipo_func, nome_func, img_func) VALUES ('+ email + ',' + senha + ',' + tipo_func + ',' + nome_func + ',' + img_func + ');';
		connection.query(sql, callback);
	}
}