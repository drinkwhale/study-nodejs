const fs = require('fs');
const ejs = require('ejs');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const client = mysql.createConnection({
    port: '3306',
    user: 'root',
    password: '2750'
});

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(52273, function () {
    console.log('서버 실행됨... http://127.0.0.1:52273');
});

// 라우터 설정
app.get('/', function (request, response) {
    // html 파일 읽기
    fs.readFile('list.html', 'utf-8', function (error, data) {
        client.query('SELECT * FROM inform', function (error, results) {
            response.send(ejs.render(data, {
                data: results
            }));
        });
    });
});

app.get('/delete/:id', function (request, response) {
    client.query('DELETE FROM inform WHERE id=?',
        [request.params.id],
        function () {
            response.redirect('/');
        });
});

app.get('/insert', function (request, response) {
    
    fs.readFile('insert.html', 'utf-8', function(error, data){
        response.send(data);
    });
});

app.post('/insert', function (request, response) {
    const body = request.body;

    // 데이터베이스 쿼리 실행
    client.query('INSERT INTO inform (name, date, memo) VALUES (?,?,?)',
    [body.name, body.date, body.memo], function(error,results){
        
        // response.redirect('/insert.html');
    });
    response.writeHead('200', {
        'Content-Type': 'text/html;charset=utf8'
    });
    response.write('<h1>메모가 저장되었습니다.</h1>');
    response.write("<br><br><a href='/insert'>다시 작성</a>");
    response.end();
});

app.get('/edit/:id', function (request, response) {
    fs.readFile('edit.html', 'utf-8', function (error, data) {
        client.query('SELECT * FROM inform WHERE id=?', [request.params.id],
            function (error, results) {
                response.send(ejs.render(data, {
                    data: results[0]
                }));
            });
    });
})

app.post('/edit/:id', function (request, response) {

    const body = request.body;

    client.query('UPDATE inform SET name=?, date=?, memo=? WHERE id=?',
        [body.name, body.date, body.memo, request.params.id],
        function (error, results) {
            // 리스트 페이지로 요청을 한다.
            response.redirect('/');
        });
});


client.query('use memo');
// client.query('SELECT * FROM inform', function (error, result, fields) {
//     if (error) {
//         console.log('쿼리 문장에 오류가 있습니다.');
//     } else {
//         console.log(result);
//     }
// });