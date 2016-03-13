/**
 * Created by darrendu on 16/3/13.
 */


var buff = new Buffer('中','UTF-8');
console.log(buff);


var buff2 = new Buffer('a','UTF-8');
console.log(buff2);

var buff3 = new Buffer('a','ascii');
console.log(buff2);

var str = '中国人民';

var buf4 = new Buffer(str,'UTF-8');

//字符数
console.log(str.length);

//子节数
console.log(buf4.length);

console.log(buf4.toString('UTF8'));

str[0] = '北';
//不会改变str内容
console.log(str);

//buf会改变
//console.log(buf4);
//buf4[0] = 0;
//console.log(buf4);

var newBuf = buf4.slice(1);
console.log(buf4);
newBuf[0] = 0;
console.log(buf4);



