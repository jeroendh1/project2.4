const mysql = require("mysql");

// connection credentials
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "wheatherdata",
});

// Establish connection
connection.connect((err) => {
    if (err) {
        console.error("An error occurred: " + err);
        return;
    }

    console.log("Mysql db connected successfully");
});

module.exports = { connection };