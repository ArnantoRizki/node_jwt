var mysql = require('mysql');
const dotenv = require('dotenv').config();

var connection = mysql.createConnection({
    host    : process.env.HOST,
    user    : process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
connection.connect((err)=>{
    if(err){
        console.log('Cannot open connection with database.');
    }else{
        console.log('Connected to database.');
    }    
});

module.exports = connection;
