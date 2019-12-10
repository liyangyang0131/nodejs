var http = require('http');
var url = require('url');

var self = {};
var app = function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

    var pathname = url.parse(req.url).pathname.replace('/','');
    // var method = req.method;

    if(pathname !== '/favicon.ico' && self[pathname]){
        self[pathname](req,res);
    }
    res.end();
}
app.get = function(string,callback){
    self[string] = callback;
}


http.createServer(app).listen(8004);

/*app.get('/',function(req,res){
    console.log('首页')
})*/

app.get('login',function(req,res){
    console.log('login页面');
    res.end('login');
});

app.get('register',function(req,res){
    console.log('register页面')
    res.end('register');
});



