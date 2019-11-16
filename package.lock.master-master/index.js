'use strict';

const foo = require('package.lock.slave');

console.log(foo(process.argv.slice(2)));
