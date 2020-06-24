const path = require('path');

const directories = ["/Users", "jack", "work_space", "jack-nodejs", "Day1"];
const docsDirectory = directories.join(',');
// const docsDirectory = directories.join(path.sep);
console.log('디렉토리 : %s', docsDirectory);

const curPath = path.join('/Users/jack/work_spacejack-nodejs/Day1', 'path.js');
console.log('파일 위치 : %s', curPath);

const filename = "/Users/jack/work_space/jack-nodejs/Day1/path.js";
const dirname = path.dirname(filename);
const basename = path.basename(filename);
const extname = path.extname(filename);

console.log('디렉터리 : %s, 파일이름 : %s, 확장자 : %s', dirname, basename, extname);