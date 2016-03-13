
function Person(name){
    this.name = name;
    this._events = {};
}


Person.prototype.on = function(eventName,callback){

    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else {
        this._events[eventName] = [callback];
    }
}

Person.prototype.emit = function(eventName){
    console.log(arguments);
    var args = Array.prototype.slice.call(arguments,1);
    var callbacks = this._events[eventName];

    var self = this;

    callbacks.forEach(function(callback){
        callback.apply(self,args);
    });
}

Person.prototype.removeListener = function(eventName,callback){
    this._events[eventName] = this._events[eventName].filter(function(cb){
       return cb != callback;
    });
}

Person.prototype.once = function(eventName,callback){
    function onceCallback(){
        callback.apply(this,arguments);
        this.removeListener(eventName,onceCallback);
    }
    this.on(eventName,onceCallback);
}

var girl = new Person;

girl.on('长发及腰',function(){
    console.log('我娶你可好!');
});

girl.on('长发及腰',function(){
    console.log('我娶你可好...2!');
});

girl.emit('长发及腰');

girl.once('age to 18',function(style){
    console.log(style,'嫁给张三');
});

/*girl.once('age to 18',function(){
    console.log('嫁给李四');
});*/

girl.emit('age to 18','快乐');
girl.emit('age to 18','悲伤');
