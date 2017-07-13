var mysql = require('mysql');

module.exports = mysql.createConnection({
    connectionLimit: 100,
    host: 'db4free.net',
    port: 3306,
    user: 'tt_database_tt',
    password: 'Technology12',
    database: 'tt_database_tt',
    // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
})

// module.exports = mysql.createConnection({
//     connectionLimit: 100,
//     host: 'localhost',
//     port: 8889,
//     user: 'root',
//     password: 'root',
//     database: 'tt_database_tt',
//     socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
// })
