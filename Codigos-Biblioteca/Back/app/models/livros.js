module.exports = {
	getLivros : function(connection, callback){
		let sql = 'SELECT * FROM livros;';
		connection.query(sql, callback);
	},
	postLivros : function(connection, callback, nomeL, qtdL, autor, pages, imgL){
		let sql = 'INSERT INTO livros(nome_livro, qtd_livro, autor, n_pages, livro_img) VALUES ('+ nomeL + ',' + qtdL + ',' + autor + ',' + pages + ',' + imgL + ');';
		connection.query(sql, callback);
	}
}