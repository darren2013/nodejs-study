var EventEmitter = require('events');
var fs = require('fs');


var p = {};
var env = new EventEmitter();


env.on('done',output);

fs.readFile('name.txt',function(err,data){
    p.name = data.toString();
    env.emit('done');
});

fs.readFile('age.txt',function(err,data){
    p.age = data.toString();
    env.emit('done');
});

//同时读取完后,output才打印结果
function output(){
    if(p.name && p.age){
        console.log(p.name,":", p.age);
    }
}

