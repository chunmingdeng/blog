# base
> [`babel`](https://babeljs.io) is one code transform plugin
> 代码转译工具

## 定义
`babel`是一个代码转换工具，可以用来将新版本的语法转换为旧版本的语法

## 如何配置
- 安装babel
  ```js
  npm install @babel/core @babel/cli @babel/preset-env
  ```
- [配置](https://babeljs.io/docs/en/configuration#babelrcjson)
  - `babel`有多种配置方式，`babel.config.*` `.babelrc` `babelrc.*` `package.json`
  - `babel.config.json`
    ```json
    {
      "presets": ["@babel/preset-env"],
      "plugins": []
    }
    ```
  - `babel.config.js`
    ```js
    module.exports = function (api) {
      api.cache(true);

      const presets = [ ... ];
      const plugins = [ ... ];

      return {
        presets,
        plugins
      };
    }
    ```
  - `.babelrc`&`.babelrc.json`
    ```json
    {
      "presets": ["@babel/preset-env"],
      "plugins": []
    }
    ```
::: warning 关于不设置target（上面的例子就是没有设置target，都会默认转为es5）
When no targets are specified: Babel will assume you are targeting the oldest browsers possible. For example, @babel/preset-env will transform all ES2015-ES2020 code to be ES5 compatible.
:::
## 转义命令
```js
// dir structure
|--root
    |--src
        |--a.js
        |--test
            |--b.js
// 按目录编译
$ ./node_module/.bin/babel ./src -d ./lib

// 编译指定文件
$ ./node_module/.bin/babel ./src/a.js -o ./src/b.js
```