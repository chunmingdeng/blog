# base
---

## 主要依赖包版本限制
[查询地址（需科学上网）](https://gist.github.com/LayZeeDK/c822cc812f75bb07b7c55d07ba2719b3)
|Angular CLI|       Angular      |            NodeJS                            |TypeScript |              RxJS Version               |
|-----------|--------------------|------------------------------                |-----------|-----------------------------------------|
|-          |2.x                 |6.0.x or later minor                          |2.0.x      |5.0.x/5.1.x/5.2.x/5.3.x/5.4.x/5.5.x      |
|1.0.6      |4.x                 |6.9.x or later minor                          |2.2.x      |5.0.x/5.1.x/5.2.x/5.3.x/5.4.x/5.5.x      |
|1.1.3      |4.x                 |6.9.x or later minor                          |2.3.x      |5.0.x/5.1.x/5.2.x/5.3.x/5.4.x/5.5.x      |
|1.2.7      |4.x                 |6.9.x or later minor                          |2.3.x      |5.0.x/5.1.x/5.2.x/5.3.x/5.4.x/5.5.x      |
|1.3.2      |4.2.x or later minor|6.9.x or later minor                          |2.4.x      |5.0.x/5.1.x/5.2.x/5.3.x/5.4.x/5.5.x      |
|1.4.10     |4.2.x or later minor|6.9.x/8.9.x or later minor                    |2.4.x      |5.0.x/5.1.x/5.2.x/5.3.x/5.4.x/5.5.x      |
|(1.5.6)    |5.0.x               |6.9.x/8.9.x or later minor                    |2.4.x      |5.5.x                                    |
|1.5.6      |5.1.x               |6.9.x/8.9.x or later minor                    |2.5.x      |5.5.x                                    |
|1.6.7      |5.2.x or later minor|6.9.x/8.9.x or later minor                    |2.5.x      |5.5.x                                    |
|1.7.4      |5.2.x or later minor|6.9.x/8.9.x or later minor                    |2.5.x      |5.5.x                                    |
|6.0.8      |6.0.x               |8.9.x or later minor                          |2.7.x      |6.0.x/6.1.x/6.2.x/6.3.x/6.4.x/6.5.x/6.6.x|
|6.1.5      |6.1.x               |8.9.x or later minor                          |2.7.x      |6.2.x/6.3.x/6.4.x/6.5.x/6.6.x            |
|6.2.9      |6.1.x               |8.9.x or later minor                          |2.9.x      |6.2.x/6.3.x/6.4.x/6.5.x/6.6.x            |
|7.0.7      |7.0.x               |8.9.x/10.9.x or later minor                   |3.1.x      |6.3.x/6.4.x/6.5.x/6.6.x                  |
|7.1.4      |7.1.x               |8.9.x/10.9.x or later minor                   |3.1.x      |6.3.x/6.4.x/6.5.x/6.6.x                  |
|7.2.4      |7.2.x               |8.9.x/10.9.x or later minor                   |3.2.x      |6.3.x/6.4.x/6.5.x/6.6.x                  |
|7.3.9      |7.2.x               |8.9.x/10.9.x or later minor                   |3.2.x      |6.3.x/6.4.x/6.5.x/6.6.x                  |
|8.0.6      |8.0.x               |10.9.x or later minor                         |3.4.x      |6.4.x/6.5.x/6.6.x                        |
|8.1.3      |8.1.x               |10.9.x or later minor                         |3.4.x      |6.4.x/6.5.x/6.6.x                        |
|8.2.2      |8.2.x               |10.9.x or later minor                         |3.4.x      |6.4.x/6.5.x/6.6.x                        |
|8.3.25     |8.2.x               |10.9.x or later minor                         |3.5.x      |6.4.x/6.5.x/6.6.x                        |
|9.0.7      |9.0.7               |10.13.x/12.11.x or later minor                |3.6.x/3.7.x|6.5.x/6.6.x                              |
|9.x        |9.x                 |10.13.x/12.11.x or later minor                |3.6.x-3.8.x|6.5.x/6.6.x                              |
|10.x       |10.x                |10.13.x/12.11.x or later minor                |3.9.x      |6.5.x/6.6.x                              |
|10.1.x     |10.1.x              |10.13.x/12.11.x or later minor                |3.9.x/4.0.x|6.6.x                                    |
|10.2.x     |10.2.x              |10.13.x/12.11.x or later minor                |3.9.x/4.0.x|6.6.x                                    |
|11.0.7     |11.0.x              |10.13.x/12.11.x or later minor                |4.0.x      |6.6.x                                    |
|11.1.x     |11.1.x              |10.13.x/12.11.x or later minor                |4.0.x/4.1.x|6.6.x                                    |
|11.2.x     |11.2.x              |10.13.x/12.11.x or later minor                |4.0.x/4.1.x|6.6.x                                    |
|12.0.x     |12.0.x              |12.14.x/14.15.x or later minor                |4.2.x      |6.6.x                                    |
|12.1.x     |12.1.x              |12.14.x/14.15.x or later minor                |4.2.x/4.3.x|6.6.x                                    |
|12.2.x     |12.2.x              |12.14.x/14.15.x or later minor                |4.2.x/4.3.x|6.6.x/7.0.x or later minor version       |
|13.0.x     |13.0.x              |12.20.x/14.15.x/16.10.x or later minor version|4.4.x      |6.6.x/7.4.x or later minor version       |
|13.1.x     |13.1.x              |12.20.x/14.15.x/16.10.x or later minor version|4.4.x/4.5.x|6.6.x/7.4.x or later minor version       |
|13.2.x     |13.2.x              |12.20.x/14.15.x/16.10.x or later minor version|4.4.x/4.5.x|6.6.x/7.4.x or later minor version       |
|13.3.x     |13.3.x              |12.20.x/14.15.x/16.10.x or later minor version|4.4.x/4.7.x|6.6.x/7.4.x or later minor version       |
|14.0.x     |14.0.x              |14.15.x/^16.10.x or later minor version       |4.6.x/4.8.x|6.6.x/7.4.x or later minor version       |
|-----------|--------------------|----------------------------------------------|-----------|-----------------------------------------|


## 阻塞应用初始化，去做一些基础初始化功能
[link](https://dev59.com/mq_la4cB1Zd3GeqPw7Nz)
APP_INITIALIZER 会被调用两次


- 由于一旦将Router包含在APP_INITIALIZER工厂的依赖项中，您会遇到循环依赖关系问题。详见：https://github.com/angular/angular/blob/4c2ce4e8ba4c5ac5ce8754d67bc6603eaad4564a/packages/router/src/router_module.ts#L61-L64。

## 内容映射（插槽）
> [link](http://localhost:6002/guide/content-projection)
:::tabs
@tab 默认插槽
```html
<!-- parnet -->
<child-component>
    <ng-template></ng-template>
</child-component>

<!-- child-component -->
<div>
    <ng-content></ng-content>
</div>
```
@tab 具名插槽
```html
<!-- parnet -->
<child-component>
    <div class="child-content">slot content</div>
</child-component>

<!-- child-component -->
<div>
    <ng-content select='.child-content'></ng-content>
</div>
```

@tab ng-template插槽
```js
@Directive({
  selector: '[appExampleZippyContent]'
})
export class ZippyContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
```

```html
<!-- parnet -->
<child-component>
    <ng-template appExampleZippyContent>
    It depends on what you do with it.
    </ng-template>
</child-component>

<!-- child-component -->
<div>
    <ng-container [ngTemplateOutlet]="cont.templateRef"></ng-container>
</div>
```

```js
// child-component.ts
@ContentChild(ZippyContentDirective) cont!: ZippyContentDirective;
@ContentChild(ZippyContentDirective) cont!: QueryList<ZippyContentDirective>;
```
:::

## 框架升级
[官方升级地址](https://update.angular.io)
[辅助问题地址](https://zhuanlan.zhihu.com/p/691405325)

:::warning
`ng update @angular/core@8 @angular/cli@8`<br>
但很有可能你会得到下面这样的结果：<br>
`Error: Repository is not clean.  Please commit or stash any changes before updating.`<br>
没关系，这个基本不影响你的升级，我们只需要加上`--allow-dirty`就可以了:<br>
`ng update @angular/core@8 @angular/cli@8 --allow-dirty`
:::