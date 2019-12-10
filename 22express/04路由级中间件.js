var express = require('express');
var app = new express();

app.listen(8000,'localhost');

// 路由中间件
// 登录token凭证验证   1.路由中间件  2.应用级中间件

// 2.应用级中间件
/*app.use('/news',function(req,res,next){
    console.log('应用级中间件实现\n验证是否登录才能访问新闻页面');
    next();
})*/

// 1.路由中间件
app.get('/news',function(req,res,next){
    console.log('路由中间件实现\n验证是否登录才能访问新闻页面');
    next();
})

app.get('/news',function(req,res){
    res.send('新闻页面');
})