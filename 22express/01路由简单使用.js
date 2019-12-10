// 简单基本使用

/*// 项目准备
1.cd 项目
2.npm init         自定义生成package.json文件
  npm init --yes   强制生成package.json文件
3.npm install express --save--dev

// 使用
1.引用
  var express = require('express');
  var app = new express();
2.配置路由
3.监听端口*/

var express = require('express');
var app = new express();   // var app = express();

app.listen(8000,'localhost');

app.get('/',function(req,res){
    res.send('根目录');
})

app.get('/login',function(req,res){
    res.send('登录页面');
})

app.get('/home',function(req,res){
    res.send('首页');
})
