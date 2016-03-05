/**
 * Created by darrendu on 16/3/5.
 */


//一般放在顶部
process.on('uncaughtException',function(e){
    console.log('uncaughtexception', e.message);
});

var name = 'zs';

exports.name = name;

//this 指的是exports对象
//console.log(this);
//console.trace();
/**
 * global == windown全局对象
 */
//console.log(global);


process.stdout.write('hello,world!');
console.log(process.pid);

process.stdin.on('data',function(data){
   console.log(data.toString());
});

/**
 * 别的进程杀死时,不会调用
 */
process.on('exit',function(){
    console.log("i am going to be dead");
});

//防止进程终止

try{
    console.log(a);
}catch(e){
    console.log(e.message);
}



console.log(b);

