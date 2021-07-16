module.exports = {
	livrosDelete : function(req, connection, callback){ 
		let sql = "DELETE FROM livros WHERE id_livro = " + req.body.id_livro + ";";
		connection.query(sql, callback);
	}
}