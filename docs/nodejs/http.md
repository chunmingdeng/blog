# http
---
> HTTP是一种无状态的协议，无状态是指Web浏览器与Web服务器之间不需要建立持久的连接
## [toturial_MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)


## cors err解析

## 普通跨域解决方案

### 特殊案例
```js
// 前端在请求头中添加了
setHeaders: {
'x-requested-with': 'XMLHttpRequest',
},
// 在后端代码中
const corsOptions = {
    origin: 'http://localhost:4500', // 允许的域名，可以是数组或函数
    methods: ['GET', 'POST'], // 允许的 HTTP 方法
    allowedHeaders: ['Content-Type', 'Authorization', 'x-requested-with'], // 允许的头部信息必须带上x-requested-with
    credentials: true // 是否允许发送 cookies
};