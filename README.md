# nodejs
nodejs学习
Node.js
一、	介绍

Node.js是一个javascript的运行环境（打破了只能在浏览器中运行的局面），它让javascript可以开发后端程序。

二、	Nodejs优势

1.nodejs语法完全是js语法，只要你懂js基础就可以学会nodeJS后端开发
2.超前的高并发能力
Node.js 只支持单线程。但是可以开启 多进程 充分利用多核 CPU。
Node.js只在一个线程中运行。当有用户连接，就触发一个内部事件，通过非阻塞I/O、事件驱动机制，让node.js程序宏观上也是并行的。使用node.js，一个8GB内存服务器，可以同时处理超过4万用户的连接。
传统的服务器端语言中，会为每个客户端连接创建一个新的线程。而每个线程需要耗费大约2MB内存，理论上，一个8GB内存的服务器可以同时连接的最大用户数为4000个左右。
3．开发周期短，开发成本低，学习成本低

三、
node 有三大特性：单线程、非阻塞I/O、事件驱动

四、概念解释

1.非阻塞 I/O，也叫异步 I/O。
  node的I/O请求都是异步的（如：sql查询请求、文件流操作操作请求、http请求...）

2.事件驱动
  node的events模块

3.路由
  根据不同的url，执行不同的操作



################################################

1.你会发现，我们本地写一个 js，打死都不能直接拖入浏览器运行，但是有了 node，我
  们任何一个 js 文件，都可以通过 node 来运行。也就是说，node 就是一个 js 的执行环境。

2.在命令行中输入node->enter
  可以编写代码，就像在浏览器控制台编写代码一样。

3.
