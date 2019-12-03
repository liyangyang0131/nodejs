var nav = require('nav');  // 找不到nav.js，到node_modules找到nav文件夹，在此文件夹下有package.json,属性"main": "nav.js",

console.log(nav);

// 命令行，在文件夹nav路径下，输入npm init --yes命令生成package.json文件
// --yes强制生成package.json文件，可省略
//实现方法：在nav文件夹下创建package.json，指定属性"main": "xx.js"(指定入口文件)