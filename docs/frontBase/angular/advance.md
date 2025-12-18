# 进阶
## form

### form校验
- 校验函数
    ```js
    const validFn1 = control => {
        const reg = /^***$/;
        return reg.test(control.value) ?
        null :
        {
            // 这种会先去autoTips中匹配，没有则需要在html中用control.hasError(<key>)判断
            <key>: <errorMsg>
            // 这种会默认提示
            <key>: {
                'zh-cn': <errorMsg>
            }
        }
    }
    ```

- `form`元素添加`[nzAutoTips]='autoTips'`指令
    ```ts
    // 会根据校验返回的key自动展示对应的提示
    autoTips: Record<string, Record<string, string>> = {
        'zh-cn': {
            required: '必填项'
        },
        en: {
            required: 'Input is required'
        },
        default: {
            email: '邮箱格式不正确/The input is not valid email'
        }
    };
    ```

- 存在`nzAutoTips`的情况下使用自定义的tip，在`nz-form-control`元素上增加`nzDisabledAutoTips`指令，并添加`nzErrorTip`指令指定要提示的内容（这种在只有一种校验的情况下可用）
    ```html
    <nz-form-control
        nzDisableAutoTips
        nzErrorTip="Please input your password!">
          <!-- 内容 -->
    </nz-form-control>
    ```

- 多校验提示，`nzErrorTip`指令指向一个`templateRef`，在这个`ng-template`上添加`let-control`以便在判断条件中使用`control.hasError(<key>)`来判断要展示的异常信息。
    ```ts
    // 首先在formcontrol对象的第二个参数传入校验函数
    form = this.fb.Group({
        name: ['', validFn1, validFn2]
    });
    /**
     * 校验函数（此列），也可以是一个工厂函数（闭包）
     * 返回值：校验成功返回null，检验不通过返回一个对象，可以通过
     * control.hasError(<key>)来判断展示什么错误信息
    */
    const validFn1 = (control: AbstractControl) => {
        const reg = /^***$/
        return reg.test(control.value) ?
                null :
                {
                    <key>: <errorMsg>
                }
    }
    ```

- 如何实现`error tpl`一处定义，多组件使用
> 原理：在根组件定义模版，然后在根组件初始化（ngAfterViewInit）的时候，将模版赋给组件的属性，然后通过`@ViewChild`获取到模版，保存到globalService中的某个属性上，使用的时候在具体的组件中将globalService定义为public，然后可以在html中使用`<nz-form-contorl [nzErrorTip]='gService.getErrorTpl()'></nz-form-contorl>`直接传入对应的模版即可
```html
<ng-template
    #commonErrorTipTpl
    let-control>
    <div *ngIf="control.hasError('maxlength')">最大长度为{{ control.errors.maxlength.requiredLength }}</div>
    <div *ngIf="control.hasError('required')">
        {{ _isArray(control.value) ? '必选' : '必填' }}
    </div>
    <div *ngIf="control.hasError('formatError')">
        {{ control.errors.formatError }}
    </div>
</ng-template>
```

### 整个form校验工具函数
```js
    /**
     * @description 对formControl进行校验，对formGroup的嵌套进行处理
     */
    export const formControlValid = function(item) {
        if (item instanceof FormGroup) {
            Object.values(item.controls).forEach((e) =>
                formControlValid(e)
            );
        } else if(item instanceof FormArray) {
            item.controls.forEach(e => formControlValid(e))
        } else if (item instanceof FormControl) {
            if (item.invalid) {
                item.markAsDirty();
                item.updateValueAndValidity({ onlySelf: true });
            }
        }
    }
```

### 自定义受控form组件
```js
import { Component, Input, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOMER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CusCheckboxComponent),
    multi: true,
};

@Component({
    selector: 'app-cus-checkbox',
    templateUrl: './checkbox-group.component.html',
    styleUrls: ['./checkbox-group.component.less'],
    providers: [CUSTOMER_VALUE_ACCESSOR],
})
export class CusCheckboxComponent implements ControlValueAccessor, OnChanges {
    @Input() options: Array<{ label: string; value: string }>;

    _propagteOnChange: (v: any) => void;
    _propagteOnTouch: (v: any) => void;
    _value = [];

    ngOnChanges(changes: SimpleChanges): void {}

    writeValue(obj: any): void {
        if (obj) this._value = obj;
    }

    registerOnChange(fn: any): void {
        this._propagteOnChange = fn;
    }

    registerOnTouched(fn: any): void {
        this._propagteOnTouch = fn;
    }

    changeHandler(val) {
        // 组件内部控制值，将要抛出的值通过这个函数触发抛出
        this._propagteOnChange(val);
    }
}
```

### 自定义组件并自定义绑定值的返回value&valueChange
```html
<yzf-digital-specific-addition-info
    [(value)]="invoiceData.invoicePreSpecialIndustryDto"></yzf-digital-specific-addition-info>
```
```js
// 定义属性绑定值
@Input() value = null;
// 定义属性帮地址的返回emmiter
@Output() valueChange = new EventEmitter();
// 通过emmiter将至返回并绑定至原属性
this.valueChange.emit(_this.getValidInfo());
```
***有可能name&[name]Change这种成对的形式可以完成值的绑定关系***

## qiankun+nz-tooltip兼容问题
> qiankun嵌套a（angular14）、b（angular15）两个应用，先点击b应用（b应用缓存不卸载），再点击a应用，a应用页面的tooltip元素会出现不停闪烁的情况；解决方案，直接给a应用自定义overlayContainer
```ts
// src/app/micro-app-overlay-container.ts
import { Injectable, Inject, Optional } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';

/**
 * 自定义 Overlay 容器，将浮层挂载到当前微应用的根容器内（而非 body）
 */
@Injectable()
export class MicroAppOverlayContainer extends OverlayContainer {
  constructor(
    @Inject(DOCUMENT) private documentRef: Document,
    private platform: Platform
  ) {
    super(documentRef, platform); // 👈 必须传这两个参数
  }

  protected _createContainer(): void {
    // 尝试查找当前 Angular 应用的宿主元素（通常是 <app-root> 的父级）
    const appRoot = this.documentRef.querySelector('app-root');
    let containerParent = appRoot?.parentElement;

    // 如果找不到 app-root，尝试找带有特定标识的容器（如 #subapp-a）
    if (!containerParent) {
      // 可选：根据你的 qiankun 子应用挂载节点 ID 动态匹配
      const possibleContainers = this.documentRef.querySelectorAll('[id^="subapp-"]');
      if (possibleContainers.length > 0) {
        // 假设当前应用是最后一个激活的，或通过其他方式识别
        containerParent = possibleContainers[possibleContainers.length - 1] as HTMLElement;
      }
    }

    // 如果仍找不到，则 fallback 到 body（避免崩溃）
    if (!containerParent) {
      console.warn('[MicroAppOverlayContainer] 未找到子应用容器，回退到 body');
      containerParent = this.documentRef.body;
    }

    // 创建 overlay 容器
    const container = this.documentRef.createElement('div');
    container.classList.add('micro-app-overlay-container');
    container.style.position = 'fixed'; // 确保相对浏览器整体页面定位
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%'; // 这里不能用0，会导致容器没有高度，计算定位错误
    container.style.pointerEvents = 'none'; // 避免遮挡
    container.style.zIndex = '1000'; // 可根据需要调整

    containerParent.appendChild(container);
    this._containerElement = container;
  }
}
```
```ts
// app.module.ts
import { OverlayContainer } from '@angular/cdk/overlay';
import { MicroAppOverlayContainer } from './micro-overlay-container';

@NgModule({
    providers: [{ provide: OverlayContainer, useClass: MicroAppOverlayContainer }],
})
```