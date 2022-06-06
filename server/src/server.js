const express = require("express");
const endpoints = require('./endpoints')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

endpoints(app);


app.listen(3001, () => {
    console.log(`Server is running at http://localhost:3001`);
});