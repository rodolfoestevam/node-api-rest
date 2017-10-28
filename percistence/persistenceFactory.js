var mysql = require('mysql');

function createDBConnection(){
	return mysql.createDBConnection({
		host: 'localhost',
		user: 'root',
		password: 'm37465a82012u++',
		database: 'payfast',
	});
}

module.exports = function(){
	return createDBConnection;
}