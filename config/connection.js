require("dotenv").config();
// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "fccc6bnopvu322zy",
  password: process.env.DB_PASS,
  database: "hf4q4v4boo8rev71",
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
