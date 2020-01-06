1.非阻塞 I/O，异步I/O
异步请求（如：sql查询请求、文件流操作操作请求、http请求...）
2.事件驱动
 node的events模块

解决异步的方法：
1.回调函数

2.事件驱动
EventEmitter.emit('事件名',data)   发送  data为要发送的数据
EventEmitter.on('事件名',function(data){console.log(data)})     接收  data为接收到的数据


