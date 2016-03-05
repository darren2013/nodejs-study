/**
 * Created by darrendu on 16/3/5.
 */

console.log(process.cwd());
console.log(__dirname);

process.chdir('..');
process.chdir('..');

console.log(process.cwd());
console.log(__dirname);
