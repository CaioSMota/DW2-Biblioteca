module.exports = {
	getClientes : function(connection, callback){
		let sql = 'SELECT * FROM cliente;';
		connection.query(sql, callback);
	},
	postClientes : function(connection, callback, cpf, nome, email){
		let sql = 'INSERT INTO cliente(cpf, nome, email) VALUES ('+ cpf + ',' + nome + ',' + email + ');';
		connection.query(sql, callback);
	}
}