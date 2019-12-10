var app = function(){
    console.log(app);
}

app.get = function(){
    console.log('请求方法是get');
}

app.post = function(){
    console.log('请求方法是post');
}

console.log(app());
console.log(app.get());
console.log(app.post());
