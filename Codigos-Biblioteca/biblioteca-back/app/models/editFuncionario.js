module.exports = {
	funcionarioEdit : function(req, connection, callback){ 
		let sql = "UPDATE funcionario SET ? WHERE id_func = " + req.body.id_func + ";";
        let func = req.body;
		connection.query(sql, func, callback);
	}
}