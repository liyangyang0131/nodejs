var fs = require('fs');

let data = '我是写入的数据\n'
// 以文件流的方式读取文件（文件内容多时，会以块的单位读取）
var writeStream = fs.createWriteStream('output.text');

for(let i = 0;i<100;i++){
    writeStream.write(data,'utf8');
}

writeStream.end();  // 执行end方法，才能监听到finish事件

writeStream.on('finish',()=>{
    console.log('写入结束');
})

// 读取错误
writeStream.on('error',(err)=>{
    console.log(err);
});