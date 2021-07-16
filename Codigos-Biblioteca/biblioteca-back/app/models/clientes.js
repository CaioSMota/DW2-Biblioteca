module.exports = {
	getClientes : function(connection, callback){
		let sql = 'SELECT * FROM cliente;';
		connection.query(sql, callback);
	},
	postClientes : function(connection, callback, cpf, nome, email){
		let sql = 'INSERT INTO cliente(cpf, nome, email) VALUES ('+ cpf + ',' + nome + ',' + email + ');';
		connection.query(sql, callback);
	},
	getProcuraCliente : function(req, connection, callback){
		
		let sql = 'SELECT * FROM cliente WHERE nome_cliente LIKE ' + "'%"+ req.body.nome_cliente + "%' " + 'OR cpf LIKE' + "'%" + req.body.nome_cliente + "%'" + ';' ;
		let cliente = req.body;
		connection.query(sql, cliente, callback);
	}
}