console.log("Starting app...");

const os = require('os');
const fs = require('fs');

var user = os.userInfo();

console.log(user);

fs.appendFile("greetings.txt", `Hello ${user.username}`);