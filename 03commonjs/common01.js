var str = "公共代码，都可以引用"

// 不使用exports或module.exports导出在其它模块是不能被使用的，报错undefined
// 注意两种不同输出方式在其它模块引用后的使用
// exports.str = str;
module.exports = str;