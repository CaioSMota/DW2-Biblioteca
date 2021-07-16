module.exports = {
	clientePost : function(req, connection, callback){ 
		let sql = "INSERT INTO cliente SET ?";
        let cliente = req.body;
		connection.query(sql, cliente, callback);
	}
}