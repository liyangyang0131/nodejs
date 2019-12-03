/*如果我们使用 PHP 来编写后端的代码时，需要 Apache 或者 Nginx 的 HTTP 服务器，
来处理客户端的请求相应。不过对 Node.js 来说，概念完全不一样了。使用 Node.js 时，
我们不仅仅在实现一个应用，同时还实现了整个 HTTP 服务器。*/

var http = require('http');

/*req:请求
res:响应*/
http.createServer((req,res)=>{
    /*发送http头部
    HTTP 状态值：200：OK
    设置HTTP头部，状态码是200，文件类型是html,字符集是utf8*/
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
    res.write('nodejs学习');
    res.end();  // 结束请求
}).listen(8001);







