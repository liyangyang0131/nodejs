1.npm常用命令

 1）npm list                     查看当前目录下已安装的node包
 2）npm info 模块                查看模块的版本
 3）npm install jquery@版本号    指定版本安装

2.package.json
  1）dependencies 与 devDependencies 之间的区别

  使用 npm i 模块 --save 自动更新dependencies字段值
  使用 npm i 模块 --save--dev 自动更新devDependencies字段值

  dependencies    配置当前程序所依赖的其他包
  devDependencies 配置当前程序所依赖的其它包，只会下载模块，而不下载这些模块的测试和文档框架

3."dependencies": {
      "ejs": "^2.3.4",
      "express": "^4.13.3",
      "formidable": "^1.0.17"
  }

  ^表示第一位版本号不变，后面两位取最新的
  ~表示前两位不变，最后一个取最新
  *表示全部取最新

