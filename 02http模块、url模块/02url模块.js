var http = require('http');
var url = require('url');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(req.url !== '/favicon.ico') {
        console.log(req.url)
        var urlInfo = url.parse(req.url,true);  // true get请求查询参数对象化
        console.log(urlInfo);
    }
    res.write('url模块,自动监听修改');
    res.end();
}).listen(8002);