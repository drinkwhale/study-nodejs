const Person = {};  //객체 선언

Person['age'] = 22;
Person['name'] = '김정식';
Person.mobile = '010-3927-1111';
Person.job = 'DevOps';
Person.addr = '서울시 마포구 망원동'

Person.add = function (a, b) {
    c = a + b;
    return c;
};

console.log('나이 : ' + Person.add(10, 20));
// console.log('나이 : %d', Person.age); // 호출방법 1
// console.log('나이 : ' + Person.age);  // 호출방법 2
console.log('이름 : %s', Person.name);
console.log('전화번호 : %s', Person['mobile']);
console.log('직업 : %s', Person['job']);
console.log('주소 : %s', Person['addr']);