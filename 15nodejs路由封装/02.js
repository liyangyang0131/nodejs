var http = require('http');
var url = require('url');
var app = require('./test04');
var fs = require('fs');

http.createServer(app).listen(8001);

app.get('login',function(req,res){

    /*fs.readFile('views/form.html',{},function(err,data){

        res.send(data);
    })*/
    res.send('login页面')
});
app.post('dologin',function (req, res) {
    res.send(req.body);
    // res.send("<script>alert('successful !');history.back();</script>")
});

app.get('news',function (req, res) {
    res.send("国际大新闻")
});