/**
 * Created by darrendu on 16/3/5.
 */
var fs = require('fs');

//文件io也是放到下一个事件队列的顶部执行
fs.readFile('test',function(err,data){
    console.log(data.toString());
});

process.nextTick(function(){
    console.log('a');

    process.nextTick(function () {
       console.log('b');
    });
})