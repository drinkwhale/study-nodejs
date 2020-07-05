// 모듈을 추출합니다.
const socketio = require('socket.io');
const express = require('express');
const http = require('http');
const ejs = require('ejs');
const fs = require('fs');

// 웹 서버를 생성합니다.
const app = express();
app.use(express.static('public'));

// 웹 서버를 실행합니다.
const server = http.createServer(app);
server.listen(52273, function () {
    console.log('server running at http://127.0.0.1:52273');
});

// 라우트를 수행합니다.
app.get('/', function (req, res) {
    fs.readFile('lobby.html', function (error, data) {
        res.send(data.toString());
    });
});

app.get('/canvas/:room', function (req, res) {
    fs.readFile('canvas.html', 'utf8', function (error, data) {
        res.send(ejs.render(data, {
            room: req.params.room
        }));
    });
});

app.get('/room', function (request, response) {
    var rooms = Object.keys(io.sockets.adapter.rooms).filter(function (item) {
        return item.indexOf('/') < 0;
    })
    response.send(rooms);
});

const io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
    let roomId = '';
    socket.on('join', function (data) {
        socket.join(data);
        roomId = data;
    });

    socket.on('draw', function (data) {
        io.sockets.in(roomId).emit('line', data);
    });

    socket.on('create_room', function (data) {
        io.sockets.emit('create_room', data.toString());
    });
});