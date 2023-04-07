var http = require('http');
var characters = require('./utils/data.js');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes("/rickandmorty/character")) {
        var parts = req.url.split('/');
        var id = parts[parts.length - 1];
        id = parseInt(id, 10);
        var char = characters.find(usuario => usuario.id === id);
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify(char));
    }
    else {
        res.setHeader('Content-Type', 'text/plain');
        res.writeHead(404);
        res.end('json not found');
    }
}).listen(3001, 'localhost');