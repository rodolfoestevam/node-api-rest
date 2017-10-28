function PagamentoDao(connection){
	this._connection = connection;
}

PagamentoDao.prototype.salvar = function(pagamento, callback){
	this._connection.query('INSERT INTO pagamentos SET ?', pagamento, callback);
}

PagamentoDao.prototype.listar = function(callback){
	this._connection.query('select * from pagamentos', callback)
}

PagamentoDao.prototype.buscarPorID = function(id, callback){
	this._connection.query('SELECT * FROM pagamentos WHERE id = ?', id, callback)
}

// pagamento : 
	//data
	//valor
	//moeda
	//autor
	//destino


