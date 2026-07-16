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

## qiankun+console无法访问ng对象

```js
// 由于采用了@angular-builders/custom-webpack:browser
// extra-webpack.config.js中配置了output
// Angular 的调试工具（window.ng）是由 @angular/platform-browser 在标准应用启动流程中自动注入的，前提是：
// 1应用以 普通网页模式 运行（即 <script src="main.js"> 直接加载）
// 2入口是 main.ts → bootstrapModule(AppModule)
// 而配置了以下后：Webpack 会把整个 bundle 包装成一个 可被外部调用的函数/模块（类似 factory(exports, require)），而不是立即执行 bootstrap。
// 在 Qiankun 微前端架构中，主应用会手动调用这个 UMD 模块的 mount/bootstrap 方法来启动子应用。
// → 此时 Angular 不知道“页面已加载”，也就不会自动注册 ng 到 window。
const path = require("path");
const webpack = require("webpack");
const MemoryMonitorPlugin = require('./memory-monitor-plugin');

module.exports = {
    output: {
        library: "sub-app-groupTaxReport",
        libraryTarget: "umd",
    },
};
```

## standalone 组件

:::tabs
@tab 组件定义
```TypeScript
// component 定义
import { forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule } from '@angular/forms';
import { Debounce } from 'lodash-decorators';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

const CUSTOMER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CusSelectMultipleComponent),
    multi: true
};

@Component({
    standalone: true,
    selector: 'cus-select-multiple',
    template: `
        <div style="width: 300px">
            <nz-select
                [nzPlaceHolder]="请选择"
                [nzDropdownRender]="render"
                (nzOnSearch)="onSearch($event)"
                style="width: 100%"
                [(ngModel)]="value2Show"
                (ngModelChange)="onValueChange($event)"
                nzDropdownClassName="cus-select-multiple-top-overlay"
                [nzNotFoundContent]='null'
                nzServerSearch
                nzAllowClear
                nzShowSearch>
                <nz-option
                    [nzValue]="showString"
                    [nzLabel]="showString"></nz-option>
            </nz-select>

            <ng-template #render>
                <ul class="cdk-overlay-select-options-cus">
                    <nz-empty
                        [nzNotFoundContent]="contentTpl"
                        *ngIf="searchOptionResult.length === 0">
                        <ng-template #contentTpl>
                            <span style="color: #999">暂无数据</span>
                        </ng-template>
                    </nz-empty>
                    <ng-container *ngFor="let l of searchOptionResult">
                        <li>
                            <label
                                nz-checkbox
                                [(ngModel)]="l.checked"
                                [nzDisabled]="l.disabled"
                                (ngModelChange)="onItemChange()">
                                {{ l.label }}
                            </label>
                        </li>
                    </ng-container>
                </ul>
            </ng-template>
        </div>
    `,
    host: { class: 'cus-select-multiple' },
    providers: [CUSTOMER_VALUE_ACCESSOR],
    imports: [NzSelectModule, NzEmptyModule, NzCheckboxModule, FormsModule, CommonModule]
})
export class CusSelectMultipleComponent implements ControlValueAccessor, OnChanges, AfterViewInit, OnInit {
    @Input() options: Array<{ label: string; value: number; checked: boolean }> = [
        {
            label: '未生成',
            value: 0,
            checked: false
        },
        {
            label: '生成中',
            value: 1,
            checked: false
        },
        {
            label: '生成成功',
            value: 2,
            checked: false
        },
        {
            label: '生成失败',
            value: -1,
            checked: false
        },
        {
            label: '无需生成',
            value: 3,
            checked: false
        },
        {
            label: '未达条件',
            value: 4,
            checked: false
        }
    ];

    showString = null;
    _propagteOnChange: (v: any) => void;
    _propagteOnTouch: (v: any) => void;
    _value = [];
    value2Show = '';
    searchText = null;
    searchOptionResult = [];

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnChanges(changes: SimpleChanges): void {}

    ngOnInit(): void {
        this.searchOptionResult = [].concat(this.options);
        this.updateLable();
    }

    ngAfterViewInit(): void {}

    writeValue(obj: any): void {
        if (obj) {
            this._value = obj;
            this.options.map(r => (r.checked = this._value.includes(r.value)));
            this.updateLable();
        }
    }

    registerOnChange(fn: any): void {
        this._propagteOnChange = fn;
    }

    registerOnTouched(fn: any): void {
        this._propagteOnTouch = fn;
    }

    changeHandler(val) {
        this._value = val;
        this._propagteOnChange(val);
    }

    @Debounce(200, { leading: true, trailing: true })
    onSearch(text) {
        this.searchText = text;
        this.searchOptionResult = this.options.filter(r => r.label.includes(text));
        setTimeout(() => this.cdr.markForCheck(), 0);
    }

    @Debounce(100)
    updateLable() {
        const sel = this.options.filter(r => r.checked);
        this.showString =
            `已选择${sel.length}个维度：` +
            sel.reduce((acc, r, i) => {
                return acc + `${i === 0 ? r.label : '，' + r.label}`;
            }, '');
        this.value2Show = this.showString;
        if (sel.length === 0) this.value2Show = null;
    }

    onValueChange(v) {
        if (v === null || v?.length === 0) {
            this.options.map(r => (r.checked = false));
        }
        this.updateLable();
        const sel = this.options.filter(r => r.checked);
        this.changeHandler(sel.map(r => r.value));
    }

    onItemChange() {
        this.updateLable();
        const sel = this.options.filter(r => r.checked);
        this.changeHandler(sel.map(r => r.value));
    }
}
```

@tab 模块引用
```TypeScript
import { CusSelectMultipleComponent } from './components/sheet-import-modal/sheet-import-modal.component';

@NgModule({
  declarations: [],
  imports: [
    CusSelectMultipleComponent,
  ],
})
export class AccountBalanceModule {}
```