var express = require('express');
var app = new express();

app.listen(8000,'localhost');

// 内置中间件
// 静态文件托管------注意文件路径
// 如果你的静态资源存放在多个目录下面，你可以多次调用 express.static 中间件：

// index.html中引用的静态文件都会在public文件夹下找
//http://localhost:8000/imgs/photo.jpg
app.use(express.static('public'));

// 虚拟文件地址/static，/static后的文件地址在public文件夹下找
// http://localhost:8000/static/imgs/photo.jpg
app.use('/static',express.static("public"));



