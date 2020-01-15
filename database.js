// setting up mysql
var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Job_openings"
});

module.exports = con;
