
function db(sql, add = null, callback) {
    let mysql = require('mysql');
    let objHost = {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'test'
    };
    var connection = mysql.createConnection(objHost);
    connection.connect();
    //增删改查
    if (add != null) {
        connection.query(sql, add, callback);
    } else {
        connection.query(sql, callback);
    }
    connection.end();
}
module.exports = db;