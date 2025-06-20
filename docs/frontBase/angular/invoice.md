# 发票升级业务

> 相关资料：[upgrade website](https://angular.dev/update-guide?v=10.2-11.0&l=1)

## 1. 销项8 => 9

> 参考：[angular9升级](https://lzw.me/a/update-to-angular-9.html)
>

### 1.1 steps

1. 移除项目中`"ng-packagr": "10.0.0"`，暂时不考虑打包问题；ng-packagr 10版本依赖高版本的angular基础框架（不清楚8版本为什么会使用v10）
2. 执行`set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@8 update @angular/cli@8 @angular/core@8 --allow-dirty`
    > 执行可能失败，如果是报nodejs执行失败和`matchs`函数相关，是node版本导致，更改node版本到v12
3. 执行`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @angular/cli@9 @angular/core@9"`
    > 执行失败：`"tslib": "~2.5.0"`和项目框架使用`angular@9`版本冲突，`angular@9`依赖`^1.10.0`，暂时移除`tslib`
    > answer：重新安装`npm install tslib@^1.10.0`

    > @angular-devkit/schematics找不到1
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
    >
    > ```json
    >  // 9使用Ivy编译器导致gcc报错，在tsconfig.json文件中禁用Ivy
    > "angularCompilerOptions": {
    >  "enableIvy": false,
    > }
    > ```



## 2. 销项9 => 10

### 2.1 steps

1. ***ng update @angular/core@10 @angular/cli@10***，会自动更新部分***package.json***中的包版本

2. 手动更新以下主要核心包（其余冲突依赖自行根据问题解决）

-  ng-zorro-antd@^10.2.2
-  @angular-builders/custom-webpack@^10.0.1
-  @delon/chart@^9.5.5
-  @ant-design/icons-angular@^10.2.0
-  @angular/cdk@10.2.7



### 2.2 ng-zorro

1. 所有的组件要单独`import`，不能一次性全部`import`
2. 所有的组件倒入要具体到文件夹，如`import { NzDrawerModule } from 'ng-zorro-antd/drawer';`
3. `tooltip`组件的调用方式更改
    > `nzOverlayStyle` => `nzTooltipOverlayStyle`
    > `nzMouseLeaveDelay` => `nzTooltipMouseLeaveDelay`
    > `nzVisible` => `nzTooltipVisible`
4. `popover`组件的调用方式更改

    > `nzVisible` => `nzPopoverVisible`


### 2.3 疑难问题
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

3. ***modalService*** 提示找不到

	>  answer: 在对应的模块引入NzModalModule

``



## 3. 销项10=>11

### 3.1 steps
1. `ng update @angular/core@11 @angular/cli@11`，会自动更新部分`package.json`中的包版本
2. 手动更新以下包
    - ng-zorro-antd@^11.4.2
    - @angular-builders/custom-webpack@^11.1.1
    - @delon/chart@^11.10.4
    - @ant-design/icons-angular@^11.0.1
    - @angular/cdk@11.2.13
3. 移除`@angular-devkit/build-ng-packagr`，Angular CLI 默认不再依赖 @angular-devkit/build-ng-packagr 从 Angular 10 开始逐步内置了对库打包的支持，因此不再需要手动安装该包。
4. typescript 4.0，相关的@types/lodash需要更新为~4.14.184

### 3.2 ng-zorro
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
6. 列宽度拖动层级默认9，出现层级问题，强制修改
    ```css
    // style.less
    .nz-resizable-handle {
        z-index: 0!important;
    }
    ```
7. `table`的列固定，不再支持`[nzLeft|nzRight]='null'`的写法，想不生效，需要传入`false`值，所有`nz-table`需变更写法
8. `nzTabs`组件中`tab`标题居中问题修复，参考申请单详情顶部
    ```css
    // apply-invoice.component.less
    .ant-tabs-nav-list {
        position: relative;
        left: 50%;
        transform: translate(-50%)!important;
    }
    ```
9. `nzTable`组件左侧固定最后一列&右侧固定第一列不支持`ellipsis`，所以兼容方案修改了css，同时需要将内容用`div`元素包裹(***这个升级后续合并代码后再统一作，不然合并冲突会很多***)

### 3.3 疑难问题
1. `angular.json fileReplacements`不再支持html，[整合html内容并移除html替换功能](https://github.com/angular/angular-cli/issues/19390)；

    ```shell
    # 报错信息
    Schema validation failed with the following errors:
        Data path ".fileReplacements[0]" should NOT have additional properties(replace).
        Data path ".fileReplacements[0].replace" should match pattern "\.(([cm]?j|t)sx?|json)$".
        Data path ".fileReplacements[0]" should match exactly one schema in oneOf.
    ```
2. 升级过程中可能会出现以下报错：

    ```shell
    app.component.html:1 ERROR NullInjectorError: NullInjectorError: No provider for Overlay!
    ```

    检查`@angular/cdk`版本，若是版本和`ng-zorro-antd`不兼容就会出现上面的报错。



## 4. 销项11=>12
### 4.1 steps

1. `ng update @angular/core@12 @angular/cli@12`升级更新部分依赖
2. `npm install @angular/cdk@~12.2.13 --force`
3. `npm install ng-zorro-antd@12 --force`
4. `npm install @ant-design/icons-angular@^12.0.3`
5. `npm install @angular-builders/custom-webpack@~12.1.3`
6. `npm install @delon/chart@^12.4.2`

### 4.2 UI问题

1. 修复ng-zorro-antd升级后，高级筛选select选项消失问题

    > 高级筛选为了实现效果，针对选项菜单做了特殊处理，但是新版本select的改版是的原方式不兼容

2. 日期插件改版，导致选择日期弹出层位置错位问题

3. 高级筛选水平不对齐问题&边框弧度颜色问题

### 4.3 疑难问题

1. 升级v12，项目启动后，`angular core.js ngDevMode`变量值始终是false，导致开发者工具无法使用；需要将`angular.json architect/build/configurations/serveDev/optimization:false`。这里优化设置为true的时候。[参考1](https://brianflove.com/posts/2019-12-14-console-debugging-with-window-ng/)

2.  `@types/lodash` 版本和`typescript`兼容，更新`@types/lodash`本，此次更新`typescript`是4.3.5，对应的`@types/lodash`兼容版本是4.14.198

    ```shell
    # 报错信息
    Error: node_modules/@types/lodash/common/common.d.ts:262:65
    # ...
    ```



## 5.销项12=>13

### 5.1 steps
1. `ng update @angular/core@13 @angular/cli@13`升级主依赖
2. `npm install @angular-builders/custom-webpack@~13.1.0 --force`
3. `npm install @angular/cdk@~13.3.9 --force`
4. `npm install @ant-design/icons-angular@~13.1.0 --force`
5. `npm install ng-zorro-antd@^13.4.0 --force`
6. `npm install @types/lodash@~4.14.202`

### 5.2 ng-zorro-antd

1. 申请单详情顶部tab间距问题
2. v13版本，`nz-input-group`前缀或者后缀添加多个子元素，会默认存在间距导致搜索样式问题
3. v13版本，`nz-select`组件渲染结构发生变更，原来的申请单详情校验工具库`validDomUtils.js`无法使用
    1. `.ant-select-selection-selected-value` => `.ant-select-selection-item`
    2. `.ant-select-selection` => `.ant-select-selector`
4. `nz-select`自定义下拉渲染，css类名发生变化，自定义类名使用不要加特定类组合使用
    1. 下拉，有展示暂无数据问题
    2. 修改placeholder颜色，新组件使用input作为渲染
        1. `ant-select-selection__placeholder`=>`.ant-select-selection-placeholder`
        2. `.ant-select-selection--multiple`=>`.ant-select-multiple`
        3. `.ant-select-selection--single`=>`.ant-select-single`
        4. `.ant-select-selection-selected-value `=>`.ant-select-selection-item`
        5. `.ant-select-selection__choice`=>`.ant-select-selection-item`

    3. 修改边框原来使用`.ant-select-single`=>`.ant-select-selector`

5. 税控盘下拉选择组件break change，做兼容更改
6. `nz-cascader`组件渲染类名发生变化，覆盖样式实效问题
    1. `.ant-cascader-picker-label` => `.ant-cascader .ant-select-selection-item`
7. `nz-modal`break changes
    1. 所有的内容需要用容器包裹`<ng-container *nzModalContent></ng-container>`
    2. nzWidth严格使用数字或者字符串+px
8. `nz-drawer`break changes
    1. 内容部分需要用`<ng-container *nzDrawerContent></ng-container>`包裹

9. Grid布局不支持`nz-col`嵌套`nz-row`
10. `nz-form`新版是flex布局，想两行布局，直接给`nz-form-lable`添加` [nzSpan]="24"`属性
11. `nz-table`
     1. 新版`.ant-table-wrapper`有`max-width: 100%`导致`margin-right: 负数值`无法生效，从而导致右边滚动条占据高度，table样式问题
     2. 在表单布局中，table出现左右滚动，因为flex导致表单容器宽度和table宽度一致，实际上要加上滚动条宽度
     3. `nzEllipsis` 如果要加在左侧固定列的最后一列或者右侧固定列第一列，需要将内容用`<div class='txtOver'></div>`包裹
     4. 当表数据为空的时候，空内容部分能够左右滚动问题处理

12. `nzNotificationService`引用失败，需要在`/shared/index.ts`中声明相关模块

``````less

.nz-disable-td.ant-table-cell:has(nz-embed-empty),.ant-table-expanded-row-fixed:has(nz-embed-empty) {
    padding: 0!important;
    margin: 0!important;
}
.ant-table-expanded-row-fixed:has(nz-embed-empty) {
    width: calc(100% - 1px)!important;
    &::after {
        border: 0!important;
    }
}
``````



1. `NzMessageService`
    1. 13版本创建消息容器后，当提示消失，容器不会消失；在这之后触发的弹窗会在全局弹窗容器中追加，如果追加的弹窗容器需要通过`NzMessageService`提示信息，会出现提示信息在弹窗下层的问题，这时候需要在调用`NzMessageService`创建提示信息前调用其`remove()`方法(貌似有时候无效，所以最终方案还是css将message层级改为10000)；


### 5.3 疑难问题

1. 提示无法找到`less-loader`模块，`less-loader`模块是`@angular-devkit/build-webpack@0.1303.11`的次级依赖模块，但是在`package.json`文件中限制了`webpack`的版本范围和此次升级`webpack`版本冲突，导致在`npm install`的时候，`less-loader`依赖的`webpack`版本和`package.json`限制冲突从而`less-loader`安装失败，项目启动提示找不到`less-loader`。
2. 项目启动`@types/lodash`文件报错，类型文件异常。检查`@types/lodash`当前版本对应的`typescript`版本，请选择当前`typescript`兼容的`@types/lodash`版本。



## 6.销项v13=>v14

### 6.1.setps

1. 升级主体依赖包`ng update @angular/core@14 @angular/cli@14`
2. `npm install @ant-design/icons-angular@~14.1.0 --force`
3. `npm install ng-zorro-antd@~14.3.0 --force`
4. `npm install @angular/cdk@~14.2.1 --force`
5. `npm install @angular-builders/custom-webpack@~14.1.0 --force`

6. `npm install @types/lodash@~4.14.202`

### 6.2 框架改动

1. ts中基于`component`创建组件实例（如通过某个组件创建`modal`），v14版本不需要在该组件的顶层`module.ts`文件件中导入该`component`并且添加`enteryComponents`;
2. `FormBuilder`改为了`UntypedFormBuilder`，牺牲运行时安全换取开发便捷性，但是`FormBuilder`还是可以正常使用的。
    -  ` UntypedFormArray, UntypedFormGroup, UntypedFormControl`都是类似

### 6.3 ng-zorro

1. `nz-date-picker`不再支持`nzStyle`属性
2. 导入了`NzDatePickerModule`但是没有导入`NzTimePickerModule`模块，理论上使用`nz-date-picke`会提示改元素不是一个angular组件，但是实际报错会提`nz-date-picke`提示绑定数据问题，其实导入`NzTimePickerModule`即可

