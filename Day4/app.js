const jade = require('jade');
const fs = require('fs');
const http = require('http');

http.createServer(function(req, res){
    fs.readFile('test.jade','utf-8',function(error,data){
        console.log(data);
        let fn = jade.compile(data);
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(fn ({
            name: 'Mydata',
            description: 'Hello Ejs'
        }));
    });
}).listen(52273, function(){
    console.log('Sever Running at http://localhost:52273');
});