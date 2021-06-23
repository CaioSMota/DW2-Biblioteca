module.exports = {
	getEmprestimo : function(connection, callback){
		let sql = 'SELECT livro_img,nome_livro, nome_cliente, nome_func, tempo_emprestimo FROM emprestimo ' +
			'INNER JOIN livros ON  livros.id_livro = emprestimo.id_livro' +
			' INNER JOIN cliente ON  cliente.id_cliente = emprestimo.id_cliente' +
			' INNER JOIN funcionario ON  funcionario.id_func = emprestimo.id_func' + ';';
		connection.query(sql, callback);
	},
	emprestimoPost : function(req, connection, callback){
		let sql = 'INSERT INTO emprestimo SET ?';
		let emprestimo = req.body;
		console.log(req.body);
		connection.query(sql, emprestimo, callback);
	}
}