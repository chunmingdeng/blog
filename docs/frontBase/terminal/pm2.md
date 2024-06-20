# pm2


## 安装
npm install pm2 -g

## 启动服务
```js
// node服务
pm2 start app.js --name test
// 前端npm服务，注意顺序和空格，--name参数需要再npm命令后面，否则会出现pm2服务名称变成npm
pm2 start npm --name test -- run dev

pm2 start npm --name test -- run dev &
```

## 查看已运行的项目信息
```js
pm2 show <projectName>
```

## 删除服务
```js
pm2 delete <id|name|...>
```