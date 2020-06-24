const net = require('net');

const hostname = 'localhost';
const port = 3000;

var server = net.createServer(function (socket) {
    socket.name = socket.remoteAddress + ':' + socket.remotePort;
    console.log('클라이언트 연결됨 -> ' + socket.name);

    socket.on('data', function (data) {
        console.log('클라이언트로부터 받은 데이터 : ' + data);
        socket.write(data + ' from server');
    });

});

server.listen(port);
console.log('소켓 서버 실행됨 : ' + port);