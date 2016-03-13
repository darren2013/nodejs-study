/**
 * Created by darrendu on 16/3/13.
 */

exports.loaded = function(){
    console.log("A loaded:",module.loaded);
}

console.log("A开始加载......");

var b = require("./b");

exports.name = 'zs';
