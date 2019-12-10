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
var app = new express();    // var app = express();

app.listen(8000,'localhost');

// 动态路由
// /newsContent/123
app.get('/newsContent/:id',function(req,res){
    console.log(req.params);
    var id = req.params.id
    res.send("文章详情页\t文章id："+id);
})

//get传值
// /productDetails?id=1&type=a
app.get('/productDetails',function(req,res){
    console.log(req.query);
    res.send(req.query);
})
