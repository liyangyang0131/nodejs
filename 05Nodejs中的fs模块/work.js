var fs = require('fs');
// 1.查看服务器上是否有upload目录，没有，创建upload目录     实际应用:图片上传
fs.readdir('upload',(error)=>{
    if(error){  //no such file or directory  没有upload目录
        fs.mkdir('upload',(err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('创建目录成功！')
        })
        return;
    }
    console.log('目录存在！');
})


// 2.检测html目录下的所有目录
let directory = [];
fs.readdir('html',(error,data)=>{
    if(error){
        console.log('没有html目录'+error);
        return;
    }
    data.forEach(item=>{
        (function(){
            fs.stat('html/'+item,function(err,stats){  // 异步函数
                if(err){
                    console.log(err);
                    return;
                }
                if(stats.isDirectory()){
                    directory.push(item);
                    console.log(directory);
                }
            })
        })(item)
    })
})