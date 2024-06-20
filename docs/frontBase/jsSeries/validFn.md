# 校验函数

## 组合校验函数
```js
/** 
 * @description 整合校验函数
 * @name validCompose
 * @param {array}validFns 校验函数数组
 * @param {string}v 被校验值
 * @return {string | null} 返回错误信息或者null
 * */
const validCompose = (validFns, v) => {
    if(!Array.isArray(validFns)) {
        console.info('%c组合校验 compose 函数入参需是 array 类型', 'background: red; color: #fff;');
        return null;
    } 
    let result = null;
    for(let fn of validFns) {
        result = fn(v);
        if(result) break;
    }
    return result;
}
// example
validCompose([numberValid, positiveNumberValid], '-1.2')
```

## 数值类

1. 是否是数值
    ```js
    /**
    * @param {string | undefined | null | object}v
    */
    const isEmptyNumber = v => {
        if (v === '' || v === undefined || v === null) return true;
        return false;
    };
    ```

2. 纯数字，包含整数，负数，整数，小数
    ```js
    const numberValid = v => {
        return /^[-]?\d+(\.\d+)?$/.test(v) ? null : '必需是数字';
    }
    ```

3. 小数位不超过 n 的数值
    ```js
    /**
    * @description 校验小数位限制
    * @param v 校验值
    * @param n 小数位数量小于等于n
    */
    const pointNumberValid = (v, n) => {
        if(isEmptyNumber(v)) return null;

        const reg = new RegExp(`^[-]?\\d+(\\.\\d{1,${n}})?$`);
        console.log(reg)
        if(reg.test(v)) return null;
        return `小数位数量需小于等于${n}`
    }
    ```

4. 范围

    ```js
    /**
    * @description 限定数值的范围，默认开区间
    * example: numRangeLimit(v, min, max [, isisStartOpenInterVal, isEndOpenInterVal])
    * @param {number}min 最小值，必填，不校验则填写 undefined
    * @param {number}max 最大值，必填，不校验则填写 undefined
    * @param {boolean}isStartOpenInterVal 是否开区间开始，default = true
    * @param {boolean}isEndOpenInterVal 是否开区间结束，default = true
    * @return {string|null} 校验错误文案
    */
    const numRangeLimit = (value, min, max, isStartOpenInterVal = true, isEndOpenInterVal = true) => {
        if (isEmptyNumber(value)) return null;
        let m = null;
        let v = +value;

        if (!isEmptyNumber(min)) {
            if (isStartOpenInterVal) {
                if (v < min || v === min)  m = `值需大于${min}`;
            } else {
                if (v < min) m = `值需大于等于${min}`;
            }
        }

        if (!isEmptyNumber(max)) {
            if (isEndOpenInterVal) {
                if (v > max || v === max) m = `值需小于${max}`;
            } else {
                if (v > max) m = `值需小于等于${max}`;
            }
        }
        return m;
    };
    ```

5. 正数
    ```js
    const positiveNumberValid = (v) => {
        return /^\d*(\.\d+)?$/.test(v) ? null : '需是正数';
    }
    ```

6. 负数
    ```js
    const negativeNumberValid = v => {
        return /^-\d*(\.\d+)?$/.test(v) ? null : '需是负数';
    }
    ```

7. 整数
    ```js
    const integerNumserValid = v => {
        return /^\d+$/.test(v) ? null : '需是整数';
    }
    ```
