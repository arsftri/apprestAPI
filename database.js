//untuk mengakses database mysqlnya
var mysql = require('mysql');

//buat koneksi database
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'perpustakaanuai'
});

db.connect((err) =>{
    if(err) throw err;
    console.log('mysql terkoneksi');
});

//untuk export databasenya
module.exports = db;

