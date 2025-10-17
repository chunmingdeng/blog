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