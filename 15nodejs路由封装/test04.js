var http = require('http');
var url = require('url');

// 封装res的send方法
function changeRes(res){
    res.send = function(data){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end(data);
    }
}

var Server = function(){
    var G = this;  //全局变量

    // 处理get、post请求
    this._get = {};
    this._post = {};

    var app = function(req,res){
        changeRes(res);
        var pathname = url.parse(req.url).pathname.replace('/','');
        var method = req.method.toLowerCase();

        if(G['_'+method][pathname]){ /* 处理 post 请求 */
            if (method === 'post') {
                var postStr = '';
                req.on('data', function (chunk) {
                    postStr += chunk;
                })
                req.on('end',function(err,chunk) {
                    req.body = postStr;
                    G['_' + method][pathname](req,res);  //执行方法
                })
            }else{/* 处理非 post 请求 */
                G['_' + method][pathname](req,res)
            }
        }else{
            res.end('no router!')
        }
    }

    // 注册方式
    app.get = function(string,callback){
        G._get[string] = callback;
    }

    app.post = function(string,callback){
        G._post[string] = callback;
    }

    return app;
}

module.exports = Server();