# 发票升级业务
[link](https://lzw.me/a/update-to-angular-9.html)
[upgrade website](https://angular.dev/update-guide?v=10.2-11.0&l=1)
## 销项8 => 9

### 具体步骤
1. 移除项目中`"ng-packagr": "10.0.0"`，暂时不考虑打包问题；
    > ng-packagr 10版本依赖高版本的angular基础框架（不清楚8版本为什么会使用v10）
2. 执行`set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@8 update @angular/cli@8 @angular/core@8 --allow-dirty`
    > 执行可能失败，如果是报nodejs执行失败和`matchs`函数相关，是node版本导致，更改node版本到v12
3. 执行`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @angular/cli@9 @angular/core@9"`
    > 执行失败：`"tslib": "~2.5.0",`和项目框架使用`angular@9`版本冲突，`angular@9`依赖`^1.10.0`，暂时移除`tslib`
    > answer：重新安装`npm install tslib@^1.10.0`

    > @angular-devkit/schematics找不到
    > answer: `npm install @angular-devkit/schematics@^8`

    > 找不到@angular/cli
    > `npm install @angular/cli@~8.3.29 -g`

    > 提示最低需要nodejs v18版本，原因：@angular/cli@~8.3.29是2020年的版本
    > 安装nodejs v18版本，`npm install -g @angular/cli@~8.3.29`

    > 执行失败，提示找不到`@angular/cli`
    > 项目下执行`npm install`

    > 执行失败，提示找不到`tsconfig`文件
    > 项目下有个`projects/ng-yzf-base`项目下没有`tsconfig`文件，随便建一个

4. 升级普通依赖包
    > @angular/cdk@^9
    > @ant-design/icons-angular@^9
    > ng-zorro-antd@^9
    > @delon/chart@^9
    > @angular/cdk@~9.2.4
    > 删除`"ngx-sortablejs": "^3.1.4",`没有使用过
    > lodash lodash-es ts类型插件更新
    > 启动项目报`single-spa-angular`导出内容问题，升级至@^4
    > `npm install @angular-builders/custom-webpack@9`
5. 疑难问题
    > ngcc报错，Angular8迁移到Angular9的过程中遇到了同样的问题。 在Angular9中，他们引入了新一代的编译和渲染管道，称为Angular Ivy。文档中写道： 可以使用使用视图引擎编译器创建的库构建。这种兼容性是由称为角度兼容性编译器(ngcc)的工具提供的。在执行Angular构建时，CLI命令会根据需要运行ngcc。
    > [参考文章1](https://cloud.tencent.com/developer/ask/sof/106234238)
    > [参考文章2](https://github.com/single-spa/single-spa-angular/issues/346)
    > ```json
    >     // 9使用Ivy编译器导致gcc报错，在tsconfig.json文件中禁用Ivy
    >   "angularCompilerOptions": {
    >     "enableIvy": false,
    >   }
    > ```

## 销项9 => 10

### ng-zorro
1. 所有的组件要单独`import`，不能一次性全部`import`
2. 所有的组件倒入要具体到文件夹，如`import { NzDrawerModule } from 'ng-zorro-antd/drawer';`
3. `tooltip`组件的调用方式更改
    > `nzOverlayStyle` => `nzTooltipOverlayStyle`
    > `nzMouseLeaveDelay` => `nzTooltipMouseLeaveDelay`
    > `nzVisible` => `nzTooltipVisible`
4. `popover`组件的调用方式更改
    > `nzVisible` => `nzPopoverVisible`


### 疑难问题
1. less编译错误问题
    > 当`less-loader`版本是5以上的时候，需要修改`extra-webpack.config.js`
    > ```js
    > module.exports = {
    >     module: {
    >         rules: [
    >             {
    >                 test: /\.less$/,
    >                 loader: "less-loader",
    >                 options: {
    >                     lessOptions: {
    >                         // 5版本以上需要将此属性用lessOptions包裹
    >                         javascriptEnabled: true,
    >                     },
    >                 },
    >             },
    >         ],
    >     },
    > }
    > ```

2. `NullInjectorError: No provider for NzMessageService!`
    > answer: 在`/shared/index.ts`中`import` `NzMessageModule`

## 销项10=>11

### 具体步骤
1. `ng update @angular/core@11 @angular/cli@11`，会自动更新部分`package.json`中的包版本
2. 手动更新以下包
    - ng-zorro-antd@^11.4.2
    - @angular-builders/custom-webpack@^11.1.1
    - @delon/chart@^11.10.4
    - @ant-design/icons-angular@^11.0.1
    - @angular/cdk@11.2.13
3. 移除`@angular-devkit/build-ng-packagr`，Angular CLI 默认不再依赖 @angular-devkit/build-ng-packagr 从 Angular 10 开始逐步内置了对库打包的支持，因此不再需要手动安装该包。
4. typescript 4.0，相关的@types/lodash需要更新为~4.14.184

### ng-zorro
1. 所有icon的`iconfont`属性改为`nzIconfont`，否则图标展示异常
2. `nano.less`移除针对`.ant-btn`的`line-height`，否则新版ui按钮样式异常
3. 新版UI表单组件渲染结构发生变化，`.caculate-table-wrap`样式规则重写，同时table column伸缩内容样式层级问题修复
4. 由于项目自定义了所有内容滚动条的样式，所以浏览器滚动条会触发table的表头和表体不对齐的bug，针对滚动表单的表头
    ```css
    .nz-table-hide-scrollbar {
        scrollbar-color: unset!important;
    }
    ```
5. `nzTable`支持超出省略属性`nzEllipsis`，并且修改了固定右侧列的html结构，原有table-list方式省略会导致固定右侧列阴影样式问题。修改方案：nzTable添加`nzTableLayout="fixed"`属性，想超出省略的列添加`nzEllipsis`属性

### 疑难问题
1. angular.json fileReplacements 不再支持html，整合html，移除html替换功能[参考链接](https://github.com/angular/angular-cli/issues/19390)
    ```shell
    Schema validation failed with the following errors:
        Data path ".fileReplacements[0]" should NOT have additional properties(replace).
        Data path ".fileReplacements[0].replace" should match pattern "\.(([cm]?j|t)sx?|json)$".
        Data path ".fileReplacements[0]" should match exactly one schema in oneOf.
    ```
2. 升级过程中可能会出现`app.component.html:1 ERROR NullInjectorError: NullInjectorError: No provider for Overlay!`报错，检查`@angular/cdk`版本，若是版本和`ng-zorro-antd`不兼容就会出现上面的报错