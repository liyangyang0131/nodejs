var bar = require('bar');  // 找不到bar.js文件时，自动到node_modules文件夹下找

var foo = require('foo/foo')

console.log(bar);
console.log(foo);

// 问题：如何实现var foo = require('foo')