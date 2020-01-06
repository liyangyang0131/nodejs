# express

# cookie

# cookie简介

    cookie存储于访问者的计算机中的变量，可以让我们用同一个浏览器访问同一个域名
    的时候共享数据。

    HTTP是无状态协议。简单地说，当你浏览一个页面，然后转到同一个网站的另一个页
    面，服务器无法认识到这是同一个浏览器在访问同一个网站。每一次访问，都是没有
    任何关系的。

    Cookie 是一个简单到爆的想法：当访问一个页面的时候，服务器在下行 HTTP 报文中，
    命令浏览器存储一个字符串; 浏览器再访问同一个域的时候，将把这个字符串携带到上行
    HTTP 请求中。第一次访问一个服务器，不可能携带 cookie。 必须是服务器得到这次请求，
    在下行响应报头中，携带 cookie 信息，此后每一次浏览器往这个服务器发出的请求，都会
    携带这个 cookie。

# Cookie 特点

● cookie 保存在浏览器本地
● 正常设置的 cookie 是不加密的，用户可以自由看到;
● 用户可以删除 cookie，或者禁用它
● cookie 可以被篡改
● cookie 可以用于攻击
● cookie 存储量很小。未来实际上要被 localStorage 替代，但是后者 IE9 兼容。

# cookie 的使用，以下都是针对第三方模块cookie-parser的

1.安装 cnpm install cookie-parser --save
2.引入 var cookieParser = require('cookie-parser');
3.设置中间件
app.use(cookieParser());
4.设置 cookie
res.cookie("name",'zhangsan',{maxAge: 900000, httpOnly: true});
//HttpOnly 默认 false 不允许 客户端脚本访问
5.获取 cookie
req.cookies.name

# 属性说明：

    domain: 域名
    name=value：键值对，可以设置要保存的 Key/Value，注意这里的 name 不能和其他属性项的名字
一样
    Expires： 过期时间（秒），在设置的某个时间点后该 Cookie 就会失效，如 expires=Wednesday,
09-Nov-99 23:12:40 GMT
    maxAge： 最大失效时间（毫秒），设置在多少后失效
    secure： 当 secure 值为 true 时，cookie 在 HTTP 中是无效，在 HTTPS 中才有效
    Path： 表示 cookie 影响到的路，如 path=/。如果路径不能匹配时，浏览器则不发送这个 Cookie
    httpOnly：是微软对 COOKIE 做的扩展。如果在 COOKIE 中设置了“httpOnly”属性，则通过程序（JS
脚本、applet 等）将无法读取到 COOKIE 信息，防止 XSS 攻击产生
    singed：表示是否签名 cookie, 设为 true 会对这个 cookie 签名，这样就需要用
res.signedCookies 而不是 res.cookies 访问它。被篡改的签名 cookie 会被服务器拒绝，并且 cookie
值会重置为它的原始值

# 加密 Cookie

1.配置中间件的时候需要传参
var cookieParser = require('cookie-parser');
app.use(cookieParser('123456'));  // 任意字符串
2.设置 cookie 的时候配置 signed 属性
res.cookie('userinfo','hahaha',{domain:'.ccc.com',maxAge:900000,httpOnly:true,signed:true});
3.signedCookies 调用设置的 cookie
console.log(req.signedCookies);


# session

session 是另一种记录客户状态的机制，不同的是 Cookie 保存在客户端浏览器中，而 session 保存在服
务器上。

# Session 的用途：

    session 运行在服务器端，当客户端第一次访问服务器时，可以将客户的登录信息保存。
    当客户访问其他页面时，可以判断客户的登录状态，做出提示，相当于登录拦截。
    session 可以和 Redis 或者数据库等结合做持久化操作，当服务器挂掉时也不会导致某些客户信息（购物车）
丢失。

# Session 的工作流程

    当浏览器访问服务器并发送第一次请求时，服务器端会创建一个 session 对象，生成一个类似于
key,value 的键值对，然后将 key(cookie)返回到浏览器(客户)端，浏览器下次再访问时，携带 key(cookie)，
找到对应的 session(value)。 客户的信息都保存在 session 中

# express-session 的使用:

1.引入 express-session
var session = require("express-session");

2.设置官方文档提供的中间件
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}))

3.使用
设置值 req.session.username = "张三";
获取值 req.session.username

# 常用参数

secret 一个 String 类型的字符串，作为服务器端生成 session 的签名。
name 返回客户端的 key 的名称，默认为 connect.sid,也可以自己设置。
resave 强制保存 session 即使它并没有变化,。默认为 true。建议设置成 false。 don't save session if unmodified
saveUninitialized 强制将未初始化的 session 存储。当新建了一个 session 且未设定属性或值时，它就处于
未初始化状态。在设定一个 cookie 前，这对于登陆验证，减轻服务端存储压力，权限控制是有帮助的。（默
认：true）。建议手动添加。
cookie 设置返回到前端 key 的属性，默认值为{ path: ‘/’, httpOnly: true, secure: false, maxAge: null }。
rolling 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false）

# express-session 的常用方法:

req.session.destroy(function(err) { /*销毁 session*/
})
req.session.username='张三'; //设置 session
req.session.username //获取 session
req.session.cookie.maxAge=0; //重新设置 cookie 的过期时间

# 负载均衡配置 Session，把 Session 保存到数据库里面

1.需要安装 express-session 和 connect-mongo 模块
2.引入模块
var session = require("express-session");
const MongoStore = require('connect-mongo')(session);
3.配置中间件
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    rolling:true,
    cookie:{
        maxAge:100000
    },
    store: new MongoStore({
        url: 'mongodb://127.0.0.1:27017/student',
        touchAfter: 24 * 3600 // time period in seconds
    })
}))


# Cookie 和 Session 区别

1、cookie 数据存放在客户的浏览器上，session 数据放在服务器上（可以存储在数据库中，实现负载均衡）。
2、cookie 不是很安全，别人可以分析存放在本地的 COOKIE 并进行 COOKIE 欺骗
考虑到安全应当使用 session。
3、session 会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能
考虑到减轻服务器性能方面，应当使用 COOKIE。
4、单个 cookie 保存的数据不能超过 4K，很多浏览器都限制一个站点最多保存 20 个 cookie。