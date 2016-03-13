/**
 * Created by darrendu on 16/3/13.
 */

var fs = require('fs');

var content = fs.readFileSync('index.js');

console.log(content);