/**
 * Created by darrendu on 16/3/5.
 */

console.log('a接待客人');

//即使timeout设置0秒,也会等所有代码执行后才执行
setTimeout(function(){
    console.log('a扫地,settimeout');
},0);

/**
 * nexttick是将事件放入当前事件队列的底部
 * timeout是放入下个事件队列的顶部
 */
process.nextTick(function(){
    console.log('a扫地 nexttick');

    //这里如果是一个死循环,settimeout永远不会执行
   /* while (true){

    }*/

    process.nextTick(function(){
        console.log('a扫地 nexttick2');

        process.nextTick(function(){
            console.log('a扫地 nexttick3');

        });
    });
})

console.log('b厨师');
console.log('c厨师');


/*
while(true){

}*/
