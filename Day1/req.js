const os = require('os');

console.log('hostname : %s', os.hostname());
console.log('total memory : %s', os.totalmem());
console.log('freememory : %s', os.freemem());
console.log('CPU info : %s', os.cpus());
console.log('NIC info : %s', os.networkInterfaces());
console.dir(os.networkInterfaces());