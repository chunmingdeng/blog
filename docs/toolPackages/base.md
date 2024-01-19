# 每日一个工具包

- cross-env  [link](https://www.npmjs.com/package/cross-env)
> 当您使用这样设置环境变量时，大多数 `Windows` 命令提示符都会阻塞 `NODE_ENV=production`。（例外是`Bash on Windows`，它使用本机 `Bash`。）同样，`windows` 和 `POSIX` 命令如何利用环境变量也有所不同。在 `POSIX` 中，您使用：`$ENV_VAR` ，在 `Windows` 上，您使用%ENV_VAR%.`cross-env`使您可以拥有一个命令，而无需担心为平台正确设置或使用环境变量。就像在 `POSIX` 系统上运行时一样设置它，并且`cross-env`会正确设置它。

- ts-node [link](https://segmentfault.com/a/1190000041314836)
> `node` 是 `javascript` 语言的一个执行环境，可以直接执行 `javascript` 代码。   
> 随着技术的发展，`ts`语言的兴起，但是却没有一个`ts`的执行环境，只能将`ts`编译成js再交由node去执行。        
> 那能不能提供一个环境能直接执行 `ts` 呢？因此 `ts-node` 就被发明出来了。`ts-node` 是 `typescript` 语言的执行环境，就像 `node` 是 `javascript` 语言的执行环境一样。   
> `ts-node` 也是基于 `node` 的，在 `node` 执行的 `hook` 里自动进行了 `ts->js` 的语言编译，使得 `ts` 可以被直接执行。    

- esno [link](https://juejin.cn/post/7085300239216672805)
> 一个 `ts` 的执行环境，和 `ts-node` 本质区别是使用了 `esbuild` 作为编译器，速度更快。

- scp2 [link](https://www.npmjs.com/package/scp2)
> 一个node环境下的文件拷贝包，支持本地向指定服务器拷贝资源
```js
const scpClient = require('scp2')
const ora = require('ora') // 版本5.1.0，高版本会导致语法错误，目前原因未知
const server = {
    host:'139.196.243.207',//服务器IP
    port:22,//服务器端口
    username:'******',//服务器ssh登录用户名
    password:'******',//服务器ssh登录密码
    path:'/root/server/Document'//服务器web目录
}
const loading = ora('正在部署至 ' + server.host )
loading.start()
scpClient.scp('./docs/.vuepress/dist/', server ,(err)=>{
    loading.stop()
    if(err) {
        console.log('部署失败')
        throw err
    }else {
        console.log('部署成功')
    }
})
```

- formiable [link](https://www.npmjs.com/package/formidable)
> 以高效流畅的方式解析文件上传请求并不是个简简单单的任务，Node社区中有几个可以完成这项任务的模块。formidable就是其中之一，它是由Felix
Geisendörfer为自己的创业公司Transloadit创建的，用于媒体上传和转换，性能和可靠性很关键。
formidable的流式解析器让它成为了处理文件上传的绝佳选择，也就是说它能随着数据块的
上传接收它们，解析它们，并吐出特定的部分，就像我们之前提到的部分请求头和请求主体。这种方式不仅快，还不会因为需要大量缓冲而导致内存膨胀，即便像视频这种大型文件，也不会把
进程压垮。
```js
  var form = formidable({
    multiples: true, 
    uploadDir: `${__dirname}` // 指定上传目录，如果不存在不会自动创建
  });
  form.parse(req, (er, fields, files) => {
    if(er) {
      res.statusCode = 400;
      res.end(er);
      return;
    }
    res.end(JSON.stringify({fields: files}, null, 2))
  });
```

- socket.io [link](https://socket.io)
> 这是一个服务端和客户端都可以使用的框架，但是服务端和客户端都必须使用此框架提供的包保持一直，否则会链接不上
```js
// client
// 这个包在npm install的时候就在node_modules目录下
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io();
</script>

// server
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
```

-  ws [link](https://github.com/websockets/ws)
> 这也是一个websocket框架，只针对服务端，客户端用原生的WebSocket发起请求即可
```js
// client
const ws = new WebSocket('ws://localhost:3001');
  
ws.onopen = function(data){
    console.log('发起链接');
}
function sendMessage() {
    console.log('send message')
    ws.send('这是来自client的message');
}
ws.onmessage = function(data){
    console.log(`接收到服务器响应消息: ${data.data}`, data);
}

// server
const ws = new WebSocketServer({port: 3001})
ws.on('connection', socket => {
  console.log('socketio connected')
  socket.on('message', function message(data) {
    console.log('received: %s', data);
    socket.send('hello client, i(server) have received your message!!!')
  });
}) 

// 完整代码
const http = require('http');
const {upload} = require('./upload')
const {WebSocketServer } = require('ws')

const ws = new WebSocketServer({port: 3001})
const server = http.createServer((req, resp) => {
  switch(req.method) {
    case 'GET': 
      show(resp);
      break;
    case 'POST':
      console.log('post')
      upload(req, resp, io);
      break;
  }
})

function show(resp) {
  const html = `<!DOCTYPE html>
  <html lang="en" id="htmlRoot">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="renderer" content="webkit" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"/>
  
      <title>gochat</title>
      <link rel="icon" href="/favicon.ico" />
    </head>
    <body>
      <form action="/" enctype="multipart/form-data" method="post">
        <p><input type="text" name='name'></p>
        <p><input type="file" name='file'></p>
        <p><input type="submit" name='upload'></p>
      </form>
      <button onClick="sendMessage()">send message</button>
      <script>
        const ws = new WebSocket('ws://localhost:3001');
    
        ws.onopen = function(data){
            console.log('发起链接');
        }
        function sendMessage() {
          console.log('send message')
          ws.send('这是来自client的message');
        }
  
        ws.onmessage = function(data){
            console.log('接收到服务器响应消息', data.data);
        }
      </script>
    </body>
  </html>`;
  resp.setHeader('Content-type', 'text/html');
  resp.setHeader('Content-length', Buffer.byteLength(html));
  resp.end(html);
}

ws.on('connection', socket => {
  console.log('socketio connected')
  socket.on('message', function message(data) {
    console.log('received: %s', data);
    socket.send('hello client, i(server) have received your message!!!')
  });
}) 
server.listen(3000, () => console.log('server listen at port 3000'))
```

- interactjs [doc](https://interactjs.io/docs/)
> 一个前端交互事件包，帮助实现复杂的交互操作，拖拽，点击，放置等