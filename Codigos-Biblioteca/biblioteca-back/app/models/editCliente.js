module.exports = {
	clienteEdit : function(req, connection, callback){ 
		let sql = "UPDATE cliente SET ? WHERE id_cliente = " + req.body.id_cliente + ";";
        let cliente = req.body;
		connection.query(sql, cliente, callback);
	}
}