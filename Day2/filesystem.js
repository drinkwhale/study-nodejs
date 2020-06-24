const fs = require('fs');
const readline = require('readline');

function processFile(filename) {
    const instream = fs.createReadStream(filename);
    const reader = readline.createInterface(instream, process.stdout);

    var count = 0;

    // 한 줄씩 읽어들인 후에 발생하는 이벤트
    reader.on('line', function (line) {
        console.log('한 줄 읽음 : ' + line);
        count += 1;

        // 공백으로 구분
        var tokens = line.split(',');

        if (tokens != undefined && tokens.length > 0) {
            console.log('#' + count + ' ->' + tokens[2])
        }
    });

    // 모두 읽어들였을 때 발생하는 이벤트
    reader.on('close', function (line) {
        console.log('파일을 모두 읽음');
    })
};

const filename = './customer.txt';

processFile(filename);