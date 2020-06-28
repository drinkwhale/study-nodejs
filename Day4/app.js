const ejs = require('ejs');
const fs = require('fs');
const http = require('http');

http.createServer(function(req, res){
    fs.readFile('ejs1.ejs','utf-8',function(error,data){
        console.log(data);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(ejs.render(data, {
            name: 'Mydata',
            description: 'Hello Ejs'
        }));
    });
}).listen(52273, function(){
    console.log('Sever Running at http://localhost:52273');
});