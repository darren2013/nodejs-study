/**
 * Created by darrendu on 16/3/5.
 */

/**
 * dudongfangdeMacBook-Pro:3.global darrendu$ node process.js zs 4
 /usr/local/bin/node 0 [ '/usr/local/bin/node',
 '/Users/darrendu/nodejs-study/day-01/3.global/process.js',
 'zs',
 '4' ]
 /Users/darrendu/nodejs-study/day-01/3.global/process.js 1 [ '/usr/local/bin/node',
 '/Users/darrendu/nodejs-study/day-01/3.global/process.js',
 'zs',
 '4' ]
 zs 2 [ '/usr/local/bin/node',
 '/Users/darrendu/nodejs-study/day-01/3.global/process.js',
 'zs',
 '4' ]
 4 3 [ '/usr/local/bin/node',
 '/Users/darrendu/nodejs-study/day-01/3.global/process.js',
 'zs',
 '4' ]
 */
process.argv.forEach(function(val,index,array){
   console.log(val,index,array);
});

process.kill(44268);
