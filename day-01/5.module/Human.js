/**
 * Created by darrendu on 16/3/13.
 */

//js模块
//2.模块定义为类
var Person = function(name,age){
    this._name = name;
    this._age = age;
}

Person.prototype.getName = function(){
    return this._name;
}

Person.prototype.setName = function(name){
    this._name = name;
}

Person.prototype.getAge = function(){
    return this._age;
}

Person.prototype.setAge = function(age){
    this._age = age;
}

Person.prototype.home = '杭州';

//定义为类变量
Person.staticName = '这是一个函数属性';

//exports = Person;

//导出引用类型一定要用module.exports,不能使用exports
module.exports = Person;
