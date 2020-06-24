const calc = require('./calc');
const calc2 = require('./calc2');
const mod = require('./module1');

const tot = calc.add(10,20);
console.log('합의 결과 : '+tot);

const mul = calc.multipuly(10,20);
console.log('곱의 결과 : '+mul);

console.log('모듈로 분리한 후 - calc.add 함수 호출 결과 : %d', calc.add(10,10));


const div = calc2.div(10,20);
console.log('나눗셈의 결과 : '+div);


const abs = mod.abs(2);
console.log('절대값 : '+abs);

const cir = mod.circle(6);
console.log('원의 면적 :'+cir);