var mysql = require('mysql');

module.exports = mysql.createConnection({
    connectionLimit: 100,
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'TruongThinhECommerce',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
})

/**
 * 
 * user:u446271841_
 * Database: u446271841_ truongthinhdatabase
 * MK: e1RKlWEOiGGwr
 * 
 */

// var mysql = require('mysql');

// module.exports = mysql.createConnection({
//     connectionLimit: 100,
//     host: 'mysql.hostinger.vn',
//     user: 'u446271841_ttdat',
//     password: 'WL2p5mTG0yhX',
//     database: 'u446271841_ttdat',
//     //port: 3306,
//     //socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
// })

// // /**
// //  * 
// //  * user:u446271841_ttdat
// //  * Database: u446271841_ttdat
// //  * MK: e1RKlWEOiGGwr
// //  * WL2p5mTG0yhX
// //  */