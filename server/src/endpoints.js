const {connection: mysqldb} = require("./db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const dotenv = require('dotenv');
//dotenv.config();
//console.log(process.env.TOKEN_SECRET)



function routes (app){

    app.post('/register', async (req, res) => {
        console.log('Inserting a new employee...')
        console.log(req.body)
        const hash_password = await bcrypt.hash(req.body.password, 10);
        let sql = "INSERT INTO user (`email`, `password`, `role`) VALUES (?, ?, ?)"
        let param = [req.body.email, hash_password, req.body.admin]
        let query = mysqldb.query(sql, param, (err, result) => {
            if (err) throw err
            console.log('Employee added...')
            res.send('/login')
        })
    })

    app.post("/login", (request, response) => {
        //response.send(token);
        let sql = "SELECT role,password from user where email = ?"
        let param = [request.body.email]
        mysqldb.query(sql, param, (err, rows) => {
            if (err) throw err;
            if (rows.length !== 0) {
                const password_hash = rows[0]["password"];
                const role = rows[0]["role"];
                bcrypt.compare(request.body.password, password_hash, function(err, result) {
                    if (err) { throw (err); }
                    console.log(result);
                    if (result) {
                        if (role === 0){
                            const token = generateAccessToken({ roles: ["User"] });
                            response.send({redirect: "/", token: token, httpStatus: 200})
                        } else {
                            const token = generateAccessToken({ roles: ["Admin"] });
                            response.send({redirect: "/", token: token, httpStatus: 200})
                        }
                        console.log("Ingelogd")
                    } else {
                        response.sendStatus(401);
                        console.log("Verkeerde wachtwoord")
                    }
                });
            } else {
                response.sendStatus(401);
                console.log("Verkeerde wachtwoord")
            }
        });
    })
    app.get('/getEmployee', async (req, res) => {
        console.log('getEmployee')
        let sql = "select id, email, role from user"
        let query = mysqldb.query(sql, (err, result) => {
            if (err) throw err
            console.log(result)
            res.send(result);
        })
    })

    app.post('/test', (request, response) => {

    })

    function generateAccessToken(roles) {
        const token = "d3a4280dc18a83d170ceb4e8db3feac3bbc9d6e6722d25dad0c3131ebd4274861083234c67a00b3cf0dc17e4658e703e1f188a7175989277a0d0aaf3bff844bd"
        return jwt.sign(roles, token, { expiresIn: '1800s' });
    }

    function authenticateToken(request, response, next) {
        const token =request.body.token.split(' ')[0]
        const secretToken = "d3a4280dc18a83d170ceb4e8db3feac3bbc9d6e6722d25dad0c3131ebd4274861083234c67a00b3cf0dc17e4658e703e1f188a7175989277a0d0aaf3bff844bd"
        if (token == null) return response.sendStatus(401)

        jwt.verify(token, secretToken, function(err, data) {
            console.log(err)

            if (err) return response.sendStatus(403)

            request.data = data

            next()
        })
    }


}

module.exports = routes