const Users = [{ name: '김정식', age: 33 }, { name: '김건형', age: 32 }];

const add = function (a, b) {
    return a + b;
};

Users.push({ name: '김설이', age: 3 });
Users.push(add); // 변수로 push해서 추가가 가능

console.log('배열 요소의 수 : ' + Users.length);
console.log('세번째 요소 출력 : ' + Users[2].name);
console.log('네 번째 요소로 추가된 함수 실행 : ' + Users[3](10, 30));
// console.log('함수 실행 : ' + add(10, 10));

for (let i = 0; i < Users.length; i++) {
    console.log('배열 요소 : ' + Users[i].name, Users[i].age);
}

Users.forEach(function (item, index) {
    console.log('배열 요소 #' + index + ': %s', item.name);
});