//函数柯里化
function say(name,word){
    console.log(name,word);
}

//var newSay = say.bind(this,'张三');

var newSay = function(){
    say.apply(null,['张三'].concat(Array.prototype.slice.call(arguments)));
}

newSay('我爱你');
newSay('I love you');