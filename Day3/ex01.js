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
    fs.readFile('9-list.html', 'utf-8', function (error, data) {
        client.query('SELECT * FROM products', function (error, results) {
            response.send(ejs.render(data, {
                data: results
            }));
        });
    });
});

app.get('/delete/:id', function (request, response) {
    client.query('DELETE FROM products WHERE id=?',
        [request.params.id],
        function () {
            response.redirect('/');
        });
});

app.get('/insert', function (request, response) {
    
    fs.readFile('9-insert.html', 'utf-8', function(error, data){
        response.send(data);
    });
});

app.post('/insert', function (request, response) {
    const body = request.body;

    // 데이터베이스 쿼리 실행
    client.query('INSERT INTO products (name, modelnumber, series) VALUES (?,?,?)',
    [body.name, body.modelnumber, body.series], function(){
        response.redirect('/');
    });
})

app.get('/edit/:id', function (request, response) {
    fs.readFile('9-edit.html', 'utf-8', function (error, data) {
        client.query('SELECT * FROM products WHERE id=?', [request.params.id],
            function (error, results) {
                response.send(ejs.render(data, {
                    data: results[0]
                }));
            });
    });
})

app.post('/edit/:id', function (request, response) {

    const body = request.body;

    client.query('UPDATE products SET name=?, modelnumber=?, series=? WHERE id=?',
        [body.name, body.modelnumber, body.series, request.params.id],
        function (error, results) {
            // 리스트 페이지로 요청을 한다.
            response.redirect('/');
        });
});


client.query('use company');
// client.query('SELECT * FROM products', function (error, result, fields) {
//     if (error) {
//         console.log('쿼리 문장에 오류가 있습니다.');
//     } else {
//         console.log(result);
//     }
// });