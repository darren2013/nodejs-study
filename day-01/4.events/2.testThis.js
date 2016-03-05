
function Person(){
    this.name = 'hello,world!';

    return {name : 'hello'};
}

/**
 * 创建对象的过程
 * 1.创建一个空对象
 * 2.把空对象作为this,传入person
 * 3.返回这个对象
 * @type {Person}
 */
var p = new Person;

console.log(p.name);