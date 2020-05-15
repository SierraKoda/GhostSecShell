const postgresql = require('postgresql');
const mysql = require('mysql3');
const connection = mysql.createConnection({
    host: 'omnipuppyxx.web.app/ghostsec_postgresql/',
    user: 'admin',
    password: 'admin',
    database: 'ghostsec.db'
});
const cell;
const rows;
connection.connect((err) => {

    if (err) throw err;
    console.log('Connection Initialized:: ...');
    connection.query('SELECT ${obj} FROM ${db}', cell, rows);
    if (err) throw err;
    console.log(rows);

});





