"use strict";

const http = require('http'),
    fs = require('fs');

let socketio = require('socket.io');

let server = http.createServer(function (req, res) {

    // HTML 파일 읽기
    fs.readFile('HTMLPage.html', function (error, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(data);
    });
}).listen(3000, function () {
    console.log(`Server Running at http://localhost:3000`);
});

let io = socketio.listen(server);
io.sockets.on('connect', function (socket) {

    socket.on('message', (data) => {
        io.sockets.emit('message', data);
    });
});