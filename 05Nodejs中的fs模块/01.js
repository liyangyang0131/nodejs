/*1. fs.stat 检测是文件还是目录
2. fs.mkdir 创建目录
3. fs.writeFile 创建写入文件
4. fs.appendFile 追加文件
5.fs.readFile 读取文件
6.fs.readdir 读取目录
7.fs.rename 重命名
8. fs.rmdir 删除目录
9. fs.unlink 删除文件*/

var fs = require('fs');

fs.stat('html',function(err,state){
    if(err){
        console.log(err);
        return false;
    }
    console.log('文件：'+state.isFile());
    console.log('目录：'+state.isDirectory());
})

// 目录不能重复创建，报错：file already exists
fs.mkdir('demo',function(err){
    if(err){
        console.log(err);
        return false;
    }
    console.log('创建目录成功！');
})

// 写入的内容会被覆盖
fs.writeFile('02.text','这是写入的文件内容',function(err){
    if(err){
        console.log(err);
        return false;
    }
    console.log('创建文件成功！');
})

// 写入的内容会追加
fs.appendFile('03.text','文件中追加内容\n',function(err){
    if(err){
        console.log(err);
        return false;
    }
    console.log('追加文件成功！');
})

// data是流，通过toString()转换成内容
fs.readFile('03.text',function(err,data){
    if(err){
        console.log(err);
        return false;
    }
    console.log(data);
    console.log(data.toString());
})

// 只能读取目录下一级目录
fs.readdir('html',function(err,data){
    if(err){
        console.log(err);
        return false;
    }
    console.log(data);
})

// 1.可以实现重命名  2.可以实现剪切
fs.rename('03.text','03_rename.text',function(err,data){
    if(err){
        console.log(err);
        return false;
    }
    console.log(data);
})

fs.rename('html/index.css','html/css/reset.css',function(err,data){
    if(err){
        console.log(err);
        return false;
    }
    console.log(data);
})

fs.rmdir('demo',function(err,data){
    if(err){
        console.log(err);
        return false;
    }
    console.log('删除目录成功');
})

fs.unlink('03_rename.text',function(err,data){
    if(err){
        console.log(err);
        return false;
    }
    console.log('删除文件成功');
})




