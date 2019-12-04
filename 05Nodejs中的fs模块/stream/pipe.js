/*管道流
管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。*/
var fs = require('fs');
// 创建一个可读流
var readStream = fs.createReadStream('input.text');
// 创建一个可写流
var writeStream = fs.createWriteStream('output.text');
// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readStream.pipe(writeStream);