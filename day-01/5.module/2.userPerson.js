/**
 * Created by darrendu on 16/3/13.
 */

var p = require("./person");
console.log(require.cache);

//缓存删除,会重新加载
delete require.cache[require.resolve('./person')];
var p2 = require("./person");

//console.log(require);
p.welcome('welcome');
p.welcome('hello');