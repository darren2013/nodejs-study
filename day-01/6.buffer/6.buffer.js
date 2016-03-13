/**
 * Created by darrendu on 16/3/13.
 */


var buf = new Buffer(12);
buf.write('中国',0,6);
buf.write('人民',6,12);

console.log(buf.toString());


var buffer = new Buffer("中国人名");
var buff1 = buffer.slice(0,7);
var buff2 = buffer.slice(7);
console.log(buff1.toString());
console.log(buff2.toString());

var StringDecoder = require('string_decoder').StringDecoder;

var decoder = new StringDecoder();

console.log(decoder.write(buff1));
console.log(decoder.write(buff2));

var srcBuffer = new Buffer([4,5,6]);
var tarBuffer = new Buffer(6);
tarBuffer[0] = 1;//16进制数
tarBuffer[1] = 2;
tarBuffer[2] = 3;

srcBuffer.copy(tarBuffer,3,0,3);

console.log('tarbuffer:',tarBuffer);