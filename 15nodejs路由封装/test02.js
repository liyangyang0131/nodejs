// 进阶版本
var self = {};
var app = function(req,res){
    //执行方法
    self['/login'](req,res)
}

app.get = function(string,callback){
    self[string] = callback; //注册方法
}

app.get('/login',function(req,res){
    console.log('login')
})

setTimeout(function(){
    app('req','res')
},2000)
