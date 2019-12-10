var express = require('express');
var app = new express();

app.listen(8000,'localhost');

// 路由从上往下依次匹配，匹配到后就停止向下匹配

// 应用级中间件
app.use(function(req,res,next){  //匹配任何路由
    console.log(new Date());
    next();  /*表示匹配完成这个中间件以后程序继续向下执行*/
})

app.get('/',function(req,res){
    res.send('根目录');
})

app.get('/login',function(req,res){
    res.send('登录页面');
})