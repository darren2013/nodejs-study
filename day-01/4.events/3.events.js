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


bell.once('drop',function(who){
    console.log(who,'lost it');
})

bell.emit('ring');
bell.emit('ring');
bell.emit('drop','me');
bell.emit('drop','she');

//
console.log(bell.listeners('ring'));