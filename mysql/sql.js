//---------测试代码----------
const { json } = require('express');
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'node'
});
connection.connect();
connection.query('SELECT * from users', function(err, data, fields) {
  if (err) {
    console.log(err);
    return;
  };
  console.log(JSON.parse(JSON.stringify(data)));
});
connection.end();

