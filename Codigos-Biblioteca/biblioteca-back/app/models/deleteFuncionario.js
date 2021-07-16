module.exports = {
	funcionarioDelete : function(req, connection, callback){ 
		let sql = "DELETE FROM funcionario WHERE id_func = " + req.body.id_func + ";";
		connection.query(sql, callback);
	}
}