### version
> 版本相关的内容  

|version|cmd|
|---|---|---|
|2.*|`npm install vue`|vue1版本|
|3.*|`npm install -g @vue/cli`|vue2版本|
|4.*|`npm install -g @vue/cli`|vue3版本|

## 2.*

|cmd|desc|
|-|-|
|vue init webpack <project_name>|初始化项目|

## 3.* 
> 踩坑相关文章  [link](https://segmentfault.com/a/1190000016423943)

## 4.*
创建工程的命令和3版本相同
cli4版本安装less[相关文章](https://blog.csdn.net/qq_45704048/article/details/116609159)
  - vue add style-resources-loader  
  - 选择css预编译语言
  - npm install less less-loader --save-dev
#### 启动GUI界面 
```js
// 查询vue版本
vue --version
@vue/cli 4.5.13
// 启动vue项目的GUI管理界面
vue ui
```

#### 查看当前vue.config.js最终生成的文件
```js
// 会在根目录下生成一个output.js文件，其中包含了vue.config.js配置的相关内容
vue inspect > output.js
```


#### 关闭eslint校验
在vue.config.js中添加配置
```js
module.exports = {
  lintOnSave: false
}


|cmd|desc|
|-|-|
|vue create <project_name>|初始化项目|
> 3.0+版本的工具包也可以拉取老版本的模版
```js
npm install -g @vue/cli-init
vue init webpack my-project
```

