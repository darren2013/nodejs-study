/**
 * Created by darrendu on 16/3/13.
 */

exports.loaded = function(){
    console.log("B loaded:",module.loaded);
}

console.log("B开始加载......");

//console.log("B loaded:",module.loaded);

var a = require("./a");
a.loaded();
console.log(a.name);