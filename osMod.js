const os = require("os");
//console.log(os.uptime());
/*console.log(os.type());
console.log(os.release());
console.log(os.totalmem());
*/
const userinfo= {
    name:os.userInfo().username,
    pc: os.type(),
    vers: os.release(),
    timeUp: os.uptime(),
    total: os.totalmem(),
    free: os.freemem()
}
const bytes=1024*1024*1024;
const seconds=60*60;
console.log(`
   this user: ${userinfo.name} is currently running on ${userinfo.pc} version ${userinfo.vers}
   with total storage of ${Math.ceil(userinfo.total/ bytes)}gb | free storage ${Math.ceil(userinfo.free/ bytes)}gb
   uptime: ${Math.floor(userinfo.timeUp/seconds)} hours
`)
//console.log(userinfo.timeUp);//comment added with node