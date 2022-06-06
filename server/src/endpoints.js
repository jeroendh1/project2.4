const {connection: mysqldb} = require("./db");
const bcrypt = require('bcrypt');

function routes (app){

    app.post('/register', async (req, res) => {
        console.log('Inserting a new employee...')
        console.log(req.body)
        const hash_password = await bcrypt.hash(req.body.password, 10);
        let sql = "INSERT INTO user (`email`, `password`) VALUES (?, ?)"
        let param = [req.body.email, hash_password]
        let query = mysqldb.query(sql, param, (err, result) => {
            if (err) throw err
            console.log('Employee added...')
            res.send('/login')
        })
    })

    app.post("/login", (request, response) => {
        let sql = "SELECT password from user where email = ?"
        let param = [request.body.email]
        mysqldb.query(sql, param, (err, rows) => {
            if (err) throw err;
            if (rows.length !== 0) {
                const password_hash = rows[0]["password"];
                bcrypt.compare(request.body.password, password_hash, function(err, result) {
                    if (err) { throw (err); }
                    console.log(result);
                    if (result) {
                        response.send('/')
                        console.log("Ingelogd")
                    } else {
                        response.send('/login')
                        console.log("Verkeerde wachtwoord")
                    }
                });
            } else {
                response.send('/login')
                console.log("combinatie klopt niet ")
            }
        });
    })

    app.post('/test', (request, response) => {
        console.log("Registeren")
        console.log(request.body)
    })

}

module.exports = routes