const express = require("express");
const {application} = require("express");
const bodyParser = require("body-parser");

const port = 8002;

const path = require("path");

const route = require('./routes/router.js')

const app = express();

app.set('View', path.join(__dirname, 'view'));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', route);

app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`)

});

module.exports = app;