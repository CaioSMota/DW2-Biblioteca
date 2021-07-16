module.exports = {
	emprestimoDelete : function(req, connection, callback){ 
		let sql = "DELETE FROM emprestimo WHERE id_emprestimo = " + req.body.id_emprestimo + ";";
		connection.query(sql, callback);
	}
}