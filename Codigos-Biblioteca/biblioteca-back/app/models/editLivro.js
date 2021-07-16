module.exports = {
	livrosEdit : function(req, connection, callback){ 
		let sql = "UPDATE livros SET ? WHERE id_livro = " + req.body.id_livro + ";";
        let livro = req.body;
		connection.query(sql, livro, callback);
	}
}