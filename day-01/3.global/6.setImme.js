/**
 * Created by darrendu on 16/3/5.
 */
var fs = require('fs');

//文件io也是放到下一个事件队列的顶部执行
fs.readFile('test',function(err,data){
    console.log(data.toString());
});

setTimeout(function(){
    console.log('a扫地,settimeout');
},0);

setImmediate(function(){
    console.log('a');

    setImmediate(function(){
        console.log('b');
    })
});


/**
 * 优先级
 * nexttick--->setTimeout--->setImmediate--->文件io
 *
 * 不要让主线程干太多的事情
 */

