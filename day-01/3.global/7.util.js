/**
 * Created by darrendu on 16/3/5.
 */
var util =require('util');

function Parent(){
    this.name = 'Parent';
    this.age = 6;
    this.say = function(){
        console.log('hello,',this.name);
    }

}


Parent.prototype.showName = function(){
    console.log(this.name);
}

function Child(){
    this.name = 'Child';
}

//让Child继承parent
//第一种方法:
//Child.prototype = new Parent();

//第二种方法(推荐做法)
//Child.prototype = Object.create(Parent.prototype);

//等价于
util.inherits(Child,Parent);

var child = new Child();
child.showName();

console.log(child.__proto__.__proto__.__proto__ == Object.prototype);

function Person(){
    this.name = 'zs';
    this.parent = {
        name : 'parent'
    };
}

var person = new Person();

/**
 * showHidden,是否显示隐藏属性
 * depth:递归深度
 * color:是否显示颜色
 */
console.log(util.inspect(person,true,0,true));

var array1 = [1,2];
var array2 = [3,4,5];
console.log(array1.concat(array2));

Array.prototype.push.apply(array1,array2);
console.log(array1);

console.log(util.isArray([]));

