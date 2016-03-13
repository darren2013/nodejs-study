/**
 * Created by darrendu on 16/3/13.
 */


var buffer = new Buffer(2);
buffer[0] = -256;
buffer[1] = 260;

//大于256,会对256取模运算;小于0,先模256,再加上256
console.log(buffer);