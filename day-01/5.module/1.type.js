/**
 * Created by darrendu on 16/3/13.
 */

var p = require("./person.js");
//var json = require("./json.json");

//加载json代码
var fs = require("fs");
console.trace();
var file = fs.readFileSync("./json.json","UTF-8");

var json = JSON.parse(file);

console.log(p);
console.log(json);


