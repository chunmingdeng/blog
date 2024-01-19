# 正则表达式

## 定位

[link](https://blog.csdn.net/csm0912/article/details/81206848)

> `?=、?<=、?!、?<!`相关的正则表达式只是辅助匹配，它们本身不会匹配出任何内容，像这类的正则表达式我们也称之为零宽断言，它们存在的意义也只是为了定位。

## 零宽正向先行断言

**_断言_** 的意思是判断是否满足  
**_零宽_** 的意思是它只匹配一个位置，如同^匹配开头，$匹配末尾，只是一个位置，不返回匹配到的字符  
**_正向_** 表示需要满足 pattern， 负向表示不能满足 pattern  
**_先行_** 表示这个断言语句出现在期望返回的匹配字符的后面。

-   `\B`单词边界

-   `?=`零宽正向先行断言，非获取匹配
    > `exp1(?=exp2)`，匹配`exp2`之前的`epx1` > `'fictioncompilerfiction'.match(/fiction(?=compiler)/)`匹配 compiler 之前的 fiction，**fiction**compilerfiction
-   `?!`零宽负向先行断言，非获取匹配
    > `exp1(?!exp2)`，其意义是不是出现在`exp2`前面的`exp1`  
    > `'fictioncompilerfiction'.match(/fiction(?!compiler)/)`匹配非 compiler 之前的 fiction，fictioncompiler**fiction**

javascript 并不支持后行断言，但是浏览器支持（😂）

-   `?<=`零宽正向后行断言，非获取匹配

    > `(?<=exp1)exp2`，匹配`exp1`之后的`exp2`  
    > `'fictioncompilerfiction'.match(/(?<=)fiction/)`匹配 compiler 之后的 fiction，fictioncompiler**fiction**

-   `?<!`零宽负向后行断言，正向否定查询

    > `(?<!exp1)exp2`，匹配不在`exp1`之后的`exp2`  
    > `'ficcomfic'.match(/(?<!com)fic/)`匹配不在 com 之后的 fic，**fic**comfic

-   `?:`非捕获组
    ```js
    ()表示捕获分组，()会把每个分组里的匹配的值保存起来，使用$n(n是一个数字，表示第n个捕获组的内容)
    (?:)表示非捕获分组，和捕获分组唯一的区别在于，非捕获分组匹配的值不会保存起来(但是会参与匹配)，影响的是\1 \2这种关键字的使用
    如：
    /(?:Swift3)(Swift4)\1/
    /(Swift3)(Swift4)\2/
    上面两个是等价的
    ```

## （非）获取匹配

-   `()`表示捕获分组，()会把每个分组里的匹配的值保存起来，使用$n(n 是一个数字，表示第 n 个捕获组的内容)
-   `(?:)`表示非捕获分组，和捕获分组唯一的区别在于，非捕获分组匹配的值不会保存起来(但是会参与匹配)，影响的是\1 \2 $1 $2 这种关键字的使用

```js
let str = 'xuxi is xuxi is';
let reg = /(xuxi) (is) \1 \2/g; //\1即表示使用了存储的匹配(存储的第一个匹配)
reg.test(str); // true
str.replace(reg, '$1 $2'); // xuxi is
```

## 命名捕获组

### 写法

```js
// 普通捕获组
const normalReg = /(pattern)/;
// 命名捕获组，两种写法等价
const namedReg01 = /(?<name>pattern)/;
const namedReg02 = /(?'name'pattern)/;

// 命名捕获组在字符串调用replace，replaceAll方法的时候，
// 第二个参数是函数的时候（函数的最后一个参数）可以访问到
const reg = /\d*(?<name1>4)/;
'123456789'.replace(/\d+(?<name1>4)/g, (...arg) => {
    const result = arg.slice(-1);
    console.log(result);
});
// 输出一个Array<{[key:string]: string}>
[{"name1":"4"}]
```
