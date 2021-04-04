const port = 3003

const bodyParser = require("body-parser")
const express = require('express')
const server = express();
const AllowCors = require('./cors')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(AllowCors)

server.listen(port, function () {
	console.log(`backend está rodando na porta ${port}`);
})

module.exports = server;