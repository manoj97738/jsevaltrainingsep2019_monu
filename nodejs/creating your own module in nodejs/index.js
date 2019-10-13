/**
 * Uisng inbuild modules in nodejs
 */

const os = require('os');
console.log(os.arch());
const somename = require('./mymodule');
console.log(somename.para1 = 50)
console.log(somename.para2 = 50)
console.log(somename.add())

const validators = require('validators');
console.log(validators);
