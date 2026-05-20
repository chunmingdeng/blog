# 工具类函数

## 🚀deepClone(深克隆，深拷贝)

```js
function deepClone(source) {
    if (!source) return null;
    if (source instanceof RegExp) return new RegExp(source);
    if (source instanceof Date) return new Date(source);
    if (typeof source != 'object') return source;
    let temp = new source.constructor();
    for (let key in source) {
        temp[key] = deepClone(source[key]);
    }
    return temp;
}
```

## 🚀 数据千分位化

```js
'123456789'.replace(/\B(?=((\d{3})*)(?!\d))/g, ',');

Vue.prototype.numberThousandFormat = function (number) {
    if (!number) return '0';
    const a = number.toString().split('');
    const a_r = a.reverse();
    var result = [];
    for (var i = 0; i < a_r.length; i++) {
        if (i % 3 !== 0) {
            result.push(a_r[i]);
        } else if (i % 3 == 0 && i == 0) {
            result.push(a_r[i]);
        } else if (i % 3 == 0 && i != 0) {
            result.push(',', a_r[i]);
        }
    }
    return result.reverse().join('');
};
```

## 🚀uuid 生成

```js
getUUID: function() {
    let s = [];
    let hexDigits = "0123456789abcdef";
    for(let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";

    let uuid = s.join("");
    return uuid.replace(/-/g, '');
},
```

## 🚀 数组扁平化处理

```js
function flatter(arr) {
    return arr.reduce((p, c) => {
        return Array.isArray(c) ? [...p, ...flatter(c)] : [...p, c];
    }, []);
}
```

## 🚀 数组数据去重（3 种）

```js
// 纯数值数组的做法（不适用对象数组）
function unique(arr) {
    return arr.filter((v, i) => {
        return arr.indexOf(v) === i;
    });
}
/**
 * @description 根据提供的数组和指定的属性进行去重
 * @param {Array} arr 需要去重的数组
 * @param {string} attr 根据某个属性去重
 * @return {Array}
 */
//eg1
function unique(arr, attr) {
    let obj = {};
    return arr.reduce((acc, cur) => {
        obj[cur[attr]] ? '' : (obj[cur[attr]] = true && acc.push(cur));
        return acc;
    }, []);
}
//eg2
function unique(arr, attr) {
    return arr.reduce((acc, cur) => {
        acc.some(s => s[attr] == cur[attr]) ? '' : acc.push(cur);
        return acc;
    }, []);
}
// let a = [{id:1, name: 'asdfs'},{id:1, name: 'asdfs123'},{id:2, name: 'asdfs'},];
// unique(a, 'id')
// result => [{"id":1,"name":"asdfs"},{"id":2,"name":"asdfs"}]
// 理论上去重对象除了引用地址不同，其余属性都相同
```

## 🚀 树形结构数据递归筛选

```js
/**
 * @description 内部先用map处理是避免数据的地址引用导致修改原始数据
 * @param {Array} s 需要处理的数据
 * @param {Function} cb 筛选回调函数
 * @param {Object} conf 配置项
 */
const recursionFilter = (s, cb, conf = { children: 'children' }) => {
    let CHILDREN_FIELD = conf.children;
    function filterCus(s) {
        return s
            .map(e => ({ ...e }))
            .filter(e => {
                e[CHILDREN_FIELD] =
                    e[CHILDREN_FIELD] && filterCus(e[CHILDREN_FIELD]);
                return cb(s);
            });
    }
    return filterCus(s);
};
```

## 🚀 树形结构数据处理

```js
/**
 * @param {function}filter： 支持数据过滤
 * @param {function}callBack： 支持针对单个元素的处理操作，例如：支持key-value得key值替换，属性的删除，
 */
interface Iopt {
    filter?: (e: any) => boolean;
    callBack?: (e: any) => any;
    CHILDREN_KEY?: string;
}
export const recursionTreeData = (source, options: Iopt) => {
    let s = JSON.parse(JSON.stringify(source));
    let opt = Object.assign({ CHILDREN_KEY: 'children' }, options);
    function execFn(s) {
        let ret = [];
        if (opt.filter) ret = s.filter(e => opt.filter(e));
        if (opt.callBack) ret = s.map(e => opt.callBack(e));
        ret.forEach((e: any) => {
            e[opt.CHILDREN_KEY] && (e[opt.CHILDREN_KEY] = execFn(e.children));
        });
        return ret;
    }
    return execFn(s);
};
```

## 🚀 日期格式化

```js
Date.prototype._format = function (fmt = 'YYYY-MM-DD HH:mm:ss') {
    const date = this;
    const map = {
        'Y+': date.getFullYear(),
        'M+': `${date.getMonth() + 1}`.padStart(2, '0'),
        'D+': `${date.getDate()}`.padStart(2, '0'),
        'H+': `${date.getHours()}`.padStart(2, '0'),
        'm+': `${date.getMinutes()}`.padStart(2, '0'),
        's+': `${date.getSeconds()}`.padStart(2, '0'),
    };
    for (let key in map) {
        if (Object.hasOwn(map, key)) {
            const reg = new RegExp(`(${key})`);
            reg.test(fmt) && (fmt = fmt.replace(RegExp.$1, map[key]));
        }
    }
    return fmt;
};
```

## 🚀 日期区间追加时间后缀

```js
const timeSuffix = range => {
    if (range.length !== 2) throw new Error('日期区间追加时间后缀异常！');
    if (range[0]) range[0] += ' 00:00:00';
    if (range[1]) range[1] += ' 23:59:59';
    return range;
};
timeSuffix(['2022-02-02', '2022-02-03']);
```

## 🚀 去除空格
```js
/**
 * @description 去除字符串空格
 * @param {string}str 字符串
 * @param {number}type 去除空格类型，1或undefined：去除所有空格,2: 去除两头空格，3：去除左边空格，4：去除尾部空格
 */
export const strTrim = (str, type?) => {
    switch (type) {
        case 2:
            str = str.replace(/(^\s*)|(\s*$)/g, '');
            break;
        case 3:
            str = str.replace(/(^\s*)/g, '');
            break;
        case 4:
            str = str.replace(/(\s*$)/g, '');
            break;
        case 1:
        default:
            str = str.replace(/\s+/g, '');
    }
    return str;
};
```

## 🚀计算html元素位置
```js
/** @description 计算元素在页面中距离左边框的位置 */
function getElementLeft(element) {
    let actualLeft = element.offsetLeft;
    let current = element.offsetParent;
    while (current !== null) {
        actualLeft += (current.offsetLeft + current.clientLeft);
        current = current.offsetParent;
    }
    return actualLeft;
}

/** @description 获取元素在页面中距离上边框的位置 */
function getElementTop(element) {
    let actualTop = element.offsetTop;
    let current = element.offsetParent;
    while (current !== null) {
        actualTop += (current.offsetTop + current.clientTop);
        current = current.offsetParent;
    }
    return actualTop;
}
```