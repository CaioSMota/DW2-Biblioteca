module.exports = {
	livrosPost : function(req, connection, callback){ 
		let sql = "INSERT INTO livros SET ?";
        let livro = req.body;
		connection.query(sql, livro, callback);
	}
}