# 组件库开发
---
## 1.框架搭建

```js
// 这里项目名称使用project01
$ ng new project01 --no-create-application
// 这里包的名称使用myLib
$ ng g library myLib
```

## 2.疑问解答

### 2.1如何打包
- 在`project01`目录下`$ng build myLib`；
- 切换到`myLib`目录下，执行`npm publish`；

## 3.在应用中使用你自己的库
- 当`myLib`未构建的时候，库是无法使用的
    ```js
    ng build myLib
    ```
- 构建完成后，可以直接在项目中导入
    ```js
    import {a} from 'myLib'
    ```

    :::info
    当你在 Angular 应用中从某个库导入一些东西时，Angular 就会寻找库名和磁盘上某个位置之间的映射关系。当你用 npm 包安装该库时，它就映射到 node_modules 目录下。当你自己构建库时，它就会在 tsconfig 路径中查找这个映射。用 Angular CLI 生成库时，会自动把它的路径添加到 tsconfig 文件中。Angular CLI 使用 tsconfig 路径告诉构建系统在哪里寻找这个库。
    :::

    `ng g library myLib`后，会自动在tsconfig.json文件中生成一行
    ```json
    "paths": {
        <!-- 这里的目录即打包后的目录，也是在同一个工作空间中引用的时候所查询的路径 -->
        "my-lib": [
            "dist/my-lib"
        ]
        <!-- 如果想不打包直接使用，就需要配置源码的加载路径 -->
        "my-lib": [
            "my-lib/src/lib/my-lib.module.ts"
        ],
        "my-lib/*": [
            "my-lib/src/lib/*"
        ]
    },
    ```