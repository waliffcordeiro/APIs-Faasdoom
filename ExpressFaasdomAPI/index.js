const express = require('express');
const factors = require('./functions/factors')
const latency = require('./functions/latency');
const matrix = require('./functions/matrix')
const filesystem = require('./functions/filesystem')

const server = express();

server.get('/', (req, res) => {
    res.send(`Possíveis rotas:<br><br>Latency<br>Factors<br>Matrix<br>Filesystem`)
});

server.get('/factors', (req,res) => factors.node_factors(req, res));
server.get('/latency', latency.node_latency);
server.get('/matrix', matrix.node_matrix);
server.get('/filesystem', filesystem.node_filesystem);

server.listen(3030);