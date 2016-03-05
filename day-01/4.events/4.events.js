var EventEmitter = require('events');
var util = require('util');


function Bell(name){
    this.name = name;
}

util.inherits(Bell,EventEmitter);

var bell = new Bell('jingle');


bell.on('ring',function(){
   console.log('收到礼物!');
});

bell.addListener('ring',function(){
    console.log('收到礼物2');
});


bell.removeAllListeners('ring');
var drop = function(){
    console.log('lost it');
};

bell.once('drop',drop);

bell.emit('ring');
bell.removeListener('drop',drop);
bell.emit('drop');
bell.emit('drop');