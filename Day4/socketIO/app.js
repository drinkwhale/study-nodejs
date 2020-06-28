"use strict";

const http = require('http'),
    fs = require('fs');

let socketio = require('socket.io');

const server = http.createServer(function (req, res) {

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

    // 방 이름 생성
    let roomName = null;

    socket.on('join', function (data) {
        roomName = data;
        socket.join(data);
    });

    socket.on('message', function (data) {
        io.sockets.in(roomName).emit('message', 'test');
    });

});