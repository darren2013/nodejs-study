/**
 * Created by darrendu on 16/3/13.
 */

var Human = require("./Human");

var h1 = new Human('zhangSan',23);
var h2 = new Human('liSi',45);

console.log(h1.getName(),h1.getAge());
console.log(h2.getName(),h2.getAge());

h1.setName('zhangsan11');
h1.setAge(35);

console.log(h1.getName(),h1.getAge());
console.log(h2.getName(),h2.getAge());


//Human.prototype.home = '北京';

console.log(h1.home,h2.home);
console.log(h1.hasOwnProperty('home'));
//给h1实例赋了home属性
h1.home = '北京';
console.log(h1.hasOwnProperty('home'));

//home先去实例上去找,实例找不到去原型上找
console.log(h1.home,h2.home);


console.log(Human.staticName)