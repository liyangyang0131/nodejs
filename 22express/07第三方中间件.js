var fs = require('fs');

var express = require('express');
var app = new express();

var bodyParser = require('body-parser');

app.listen(8000,'localhost');

// 第三方中间件
// body-parser  获取 post 提交的数据

// 设置中间件
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))  //form 表单提交的数据
// parse application/json
app.use(bodyParser.json());  //提交的 json 数据的数据

// 静态文件托管  访问form.html
app.use(express.static('public'));

// 4.req.body 获取数据

app.post('/user',function(req,res){
    console.log(req.body);
    res.send(req.body);
})