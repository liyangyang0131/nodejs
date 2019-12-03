var str = require('./common01.js') // 引入文件的路径要写相对路径
var tools = require('./tools');   //可以将后缀.js省略

console.log(str);
// 通过exports导出，输出 { str: '公共代码，都可以引用' }
// 通过module.exports导出，输出  '公共代码，都可以引用'
console.log(tools.add(1,2));
console.log(tools.sayHello());
