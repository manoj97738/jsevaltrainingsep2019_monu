console.log(__dirname);
console.log(__filename);
//console.log(process.exit())
console.log(process);
console.log(process.cpuUsage());
console.log(process.argv);
console.log(global.process.env)
// global.console.log(global);
var os=require("os");
console.log(os.cpus())
process.on('exit', (code) => {
    setTimeout(() => {
      console.log('This will not run');
    }, 0);
  });
  process.on('exit', (code) => {
    setTimeout(() => {
      console.log('This will not run');
    }, 0);
  });
