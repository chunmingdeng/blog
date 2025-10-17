# http
---
> HTTP是一种无状态的协议，无状态是指Web浏览器与Web服务器之间不需要建立持久的连接
## [toturial_MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)

## http code
```js
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

```


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
