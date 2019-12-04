var fs = require('fs');
var events = require('events');

var EventEmitter = new events.EventEmitter();
var read = function(){
    fs.readFile('input.text',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        EventEmitter.emit('message',data.toString());
    })
}
EventEmitter.on('message',function(data){
    console.log(data);
})
read();




