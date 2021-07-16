module.exports = {
	clienteDelete : function(req, connection, callback){ 
		let sql = "DELETE FROM cliente WHERE id_cliente = " + req.body.id_cliente + ";";
		connection.query(sql, callback);
	}
}