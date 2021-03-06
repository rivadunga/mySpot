var getConnection = function() {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        /*host: '23.229.201.8',
        user: 'myspot-nd',
        password: 'holaatodos',
        database: 'myspot-db'*/
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'dbproyecto'
    });
    return connection;
}

var getQuery = function(query, onFinish) {
    var connection = getConnection();
    connection.connect();

    connection.query(query, function(err, rows, fields) {
        if (err) console.log(err);
        onFinish(rows);
    });
    connection.end();
}

exports.getQuery = getQuery;
