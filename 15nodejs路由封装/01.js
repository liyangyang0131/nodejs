var http = require('http');
var url = require('url');

var changeRes = function(res){
    res.send = function(data){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end(data);
    }
}

//先注册方法，然后再执行方法
var Server = function(){
    var G = this;

    this._get = {};
    this._post = {};

    var app = function(req,res){
        changeRes(res);

        var pathname = url.parse(req.url).pathname.replace('/','');
        var method = req.method.toLowerCase();

        if(pathname !== '/favicon.ico'){
            if(G['_'+method][pathname]){
                console.log(2);
                if(method === 'post'){
                    var postStr = '';
                    req.on('data',function(chunk){
                        postStr += chunk;
                    })
                    req.on('end',function(err,chunk){
                        req.body = postStr;
                        G['_' + method][pathname](req,res);  //执行方法
                    })
                }else{
                    G['_'+method][pathname](req,res);  //执行
                }
            }else{
                res.send('no router!');
            }
        }else{
            res.send();
        }
    };

    app.get = function(string,callback){
        G._get[string] = callback;  //注册方法
        // G['login'] = function(req,res){}
        console.log(1);
    }
    app.post = function(string,callback){
        G._post[string] = callback;
        // G['login'] = function(req,res){}
        console.log('post-1');
    }

    return app;
}


var app = Server();


http.createServer(app).listen(5000);

app.get('login',function(req,res){
    console.log(3);
    res.send('login页面');
})

