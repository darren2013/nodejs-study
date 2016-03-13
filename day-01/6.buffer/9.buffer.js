/**
 * Created by darrendu on 16/3/13.
 */

function concat(arrBuffers,length){

    if(arrBuffers.length == 1)return arrBuffers[0];


    if(length == undefined){
        length = 0;
        arrBuffers.forEach(function(buf){
            length += buf.length;
        });
    }


    var buffer = new Buffer(length);

    var index = 0;
    arrBuffers.forEach(function(buf){
        buf.copy(buffer,index);
        index += buf.length;
    });

    return buffer.slice(0,index);
}

var buff1 = new Buffer("中国");
var buff2 = new Buffer("人名");

console.log(concat([buff1,buff2]).toString());