var mysql = require('mysql');

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'beer_db'
  });
}

connection.connect();

module.exports = connection;