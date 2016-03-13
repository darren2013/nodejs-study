/**
 * Created by darrendu on 16/3/13.
 */

//被require多次,只会打印一次,因为会加载到缓存中
//console.log('welcome');

//js模块
//1.使用exports对象导出成员
exports.name = 'darren';

exports.welcome = function(msg){
    console.log(msg);
}

console.log("loaded........");


