# 组件库开发
---
## 1.框架搭建
### 1.1🚀创建项目
```shell
#  这里项目名称使用project01
ng new project01 --no-create-application
#  这里包的名称使用yd-lib
ng g library yd-lib
```
<pre>
|____package.json
|____projects
| |____yd-lib
| | |____...
|____node_modules
|____src
|____...
</pre>

### 1.2🚀创建组件库
```shell
ng g m yd-checkbox-group --project yd-lib
ng g c yd-checkbox-group --project yd-lib
```
<pre>
|__projects
| |____yd-lib
| | |____...
| | |____src
| | | |____public-api.ts
| | | |____test.ts
| | | |____lib
| | | | |____...
| | | | |____yd-checkbox-group
| | | | | |____yd-checkbox-group.component.less
| | | | | |____yd-checkbox-group.module.ts
| | | | | |____yd-checkbox-group.component.html
| | | | | |____yd-checkbox-group.component.spec.ts
| | | | | |____yd-checkbox-group.component.ts
</pre>

### 1.3🚀实现组件逻辑
```ts
// 模块声明yd-checkbox-group.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { YdCheckboxGroupComponent } from './yd-checkbox-group.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
    // declarations中声明组件，作为lib组件，不能少否则会报错
    declarations: [YdCheckboxGroupComponent],
    imports: [CommonModule, FormsModule, NzCheckboxModule],
    exports: [YdCheckboxGroupComponent],
})
export class YdCheckboxGroupModule {}
```

```ts
// public-api.ts中导出
export * from './lib/yd-checkbox-group/yd-checkbox-group.module';
export * from './lib/yd-checkbox-group/yd-checkbox-group.component';
```

### 1.4🚀构建组件(会生成dist文件，默认根目录下，可以在/projects/yd-lib/ng-package.json中修改)
```shell
ng build yd-lib
# or
npm run build yd-lib
```
<pre>
|____package.json
|____dist
| |____...
|____projects
| |____yd-lib
| | |____ng-package.json
| | |____...
|____node_modules
|____...
</pre>

### 1.5🚀测试组件
- 开发中测试，直接在项目中引用对应的包即可
```ts
// app.module.ts
import { YdCheckboxGroupModule } from 'projects/yd-lib/src/public-api'
```
- 开发完成，验证打包出来的包是否可以正常使用
    - link方式
    ```shell
    #切到dist目录下
    npm link
    #切换到项目根目录下
    npm link yd-lib
    ```
    - 安装包的方式
    ```shell
    npm install ./dist/yd-lib
    ```

### 1.6🚀发布组件
- 在`project01`目录下`$ng build yd-lib`；
- 切换到`./dist/yd-lib`目录下；
```shell
npm login --registry=http://81.69.164.138:4873
dcm
111111
# 使用命令cat ~/.npmrc查看，登录成功后文件下会出现如下的认证信息，只针对此仓库生效
# //81.69.164.138:4873/:_authToken="MzU2MjBlMWE3ZjhmYzY3YmQ3ODE1MTJlMzJlZWQyMjU6MDUxYjNlNTdjNWYyMDFkYzZkZGU="
npm publish
```
- 进入私有仓库可视化界面查看

## 2.在应用中使用你自己的库
- 当`yd-lib`未构建的时候，库是无法使用的
    ```js
    ng build yd-lib
    ```
- 构建完成后，可以直接在项目中导入
    ```js
    import {a} from 'yd-lib'
    ```

    :::info
    当你在 Angular 应用中从某个库导入一些东西时，Angular 就会寻找库名和磁盘上某个位置之间的映射关系。当你用 npm 包安装该库时，它就映射到 node_modules 目录下。当你自己构建库时，它就会在 tsconfig 路径中查找这个映射。用 Angular CLI 生成库时，会自动把它的路径添加到 tsconfig 文件中。Angular CLI 使用 tsconfig 路径告诉构建系统在哪里寻找这个库。
    :::

    `ng g library yd-lib`后，会自动在tsconfig.json文件中生成一行
    ```json
    "paths": {
        <!-- 这里的目录即打包后的目录，也是在同一个工作空间中引用的时候所查询的路径 -->
        "yd-lib": [
            "dist/yd-lib"
        ]
        <!-- 如果想不打包直接使用，就需要配置源码的加载路径 -->
        "yd-lib": [
            "yd-lib/src/lib/yd-lib.module.ts"
        ],
        "yd-lib/*": [
            "yd-lib/src/lib/*"
        ]
    },
    ```