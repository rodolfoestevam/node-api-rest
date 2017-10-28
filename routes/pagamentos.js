module.exports = function(app){
	app.get('/pagamentos', function(req, res){
		
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    	res.setHeader('Access-Control-Allow-Credentials', true);

		res.send('route pagamento is functional');	
	})

	app.post('/pagamentos/pagamento', function(req, res){	

		res.setHeader('Access-Control-Allow-Origin', '*');
    	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    	res.setHeader('Access-Control-Allow-Credentials', true);	

		var pagamento = req.body
		console.log(pagamento)

		res.send(pagamento);
	})
}

