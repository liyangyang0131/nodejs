var fs = require('fs');

// 以文件流的方式读取文件（文件内容多时，会以块的单位读取）
var readStream = fs.createReadStream('input.text');

let count = 0;
readStream.on('data',(chunk)=>{
    console.log(chunk.toString());
    count++;
});
// 读取结束
readStream.on('end',()=>{
    console.log('读取完成,读取次数为：'+count);
});
// 读取错误
readStream.on('error',(err)=>{
    console.log(err);
});