var fs = require('fs');

var read = function(callback){
    fs.readFile('input.text',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        callback(data.toString())
    })
}

read(function(data){
    console.log(data);
});


