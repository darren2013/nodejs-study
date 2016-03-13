/**
 * Created by darrendu on 16/3/13.
 */


var buf = new Buffer(3);
buf[0] = 0x61;
buf[1] = 0x62;
buf[2] = 0x63;

console.log(buf);

var buf2 = new Buffer([0x61,0x62,0x63]);

var buf3 = new Buffer("abc",'UTF-8');

console.log(buf3);

console.log(buf.toString() == buf2.toString());

console.log(buf2.toString() == buf3.toString());