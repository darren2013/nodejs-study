/**
 * Created by darrendu on 16/3/13.
 */

var buf1 = new Buffer([1,2,3]);
var buf2 = new Buffer([4,5,6]);

var buf = Buffer.concat([buf1,buf2],5);

console.log(buf);