//untuk mengakses database mysqlnya
var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'perpustakaanuai'
});

conn.connect((err) =>{
    if(err) throw err;
    console.log('mysql terkoneksi');
});

//untuk export databasenya
module.exports = conn;

