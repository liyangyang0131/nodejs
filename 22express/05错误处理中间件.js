var express = require('express');
var app = new express();

app.listen(8000,'localhost');

// 错误处理中间件
// 写在所有路由之后
app.use(function(req,res){
    res.status(400).send('匹配不到路由，404页面');
})