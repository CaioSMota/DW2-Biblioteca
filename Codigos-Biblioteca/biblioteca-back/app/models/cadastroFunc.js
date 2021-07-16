module.exports = {
	funcPost : function(req, connection, callback){ 
		let sql = "INSERT INTO funcionario SET ?";
        let funcionario = req.body;
		connection.query(sql, funcionario, callback);
	}
}