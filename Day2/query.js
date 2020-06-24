const url = require('url');
const querystring = require('querystring');

const curURL = url.parse('https://search.naver.com/search.naver?sm=top_hty&fbm=0&ie=utf8&query=nodejs');

const curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.dir(curURL);

const param = querystring.parse(curURL.query);

console.log('요청 파라미터 중 query의 값 : %s', param.query);
console.log('원본 요청 파라미터 : %s', querystring.stringify(param));
console.log('원본 요청 파라미터 : %s', param);