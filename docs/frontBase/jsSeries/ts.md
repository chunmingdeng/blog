# TypeScript
[offical website link(en)](https://www.typescriptlang.org/)
[offical website link(cz)](https://www.tslang.cn/docs/home.html)
[《TypeScript Deep Dive》](https://github.com/basarat/typescript-book/)

----
## 1.command line use ts
- `npm install typescript ts-loader`
```js
// install typescript in global enviorment
npm install typescript -g
// create tsconfig.json
tsc --init
```

### 1.1编译上下文
> 在项目根目录下创建tsconfig.json，ts会默认使用其配置来编译ts文件；
- 例如：(指定了tsc要编译的文件以及要忽略的文件)
    ```json
    {
        "files": [
            "./some/file.ts"
        ],
        "exclude": [
            "./folder/**/*.spec.ts",
            "./folder/someSubFolder"
        ],
        "compilerOptions": {
            // 指定typescript到哪里去读取类型文件
            "typeRoot": ["src"]
        }
    }
    ```

#### 注意事项
- 在.d.ts文件中使用`export default`的时候，需要在`ts.config.json`文件中配置`esMpoduleInterop: true`

### 1.2声明空间

#### 类型声明空间

#### declare

    ```ts
    // object with properties
    declare namespace XXX {}
    // global function
    declare function XXX():voide;
    // global variables
    declare var XXX:string;
    // class
    declare class XXX {}
    //
    declare module XXX {}
    ```

## 2.高阶用法
### 2.1 `keyof`关键字
```ts
interface IProps {
    name: string;
    age: number;
    sex: string;
}
// Keys的类型为 'name'|'age'|'sex' 组成的联合类型
type Keys = keyof IProps;
// 循环
// IPropsKey类型为
// type IPropsKey = {
//      name: boolean;
//      age: boolean;
//      highSchool: boolean;
//      university: boolean;
//  }
type IPropsKey = {[K in keyof IProps]: boolean}
```
### 2.2 条件类型
> 需要注意的是条件类型 `a extends b ? c : d` 仅仅支持在 type 关键字中使用。
```ts
type isString<T> = T extends string ? true : false;
let a: isString<'a'> // a的类型为true
```

### 2.3 Partial(可选属性)&Required(必选属性)
```ts
type optional = Partia<IProps>
// interface IProps {
//     name?: string;
//     age?: number;
//     sex?: string;
// }
```

### 2.4 Pick部分选择
```ts
type PickProps = Pick<IProps, 'name'|'age'>
// type PickProps = {
//     name: string;
//     age: number;
// }
```

### 2.5 Omit属性忽略
```ts
type OmitProps = Omit<IProps, 'name'|'age'>
// type OmitProps = {
//     sex: string;
// }
```

### 2.6 Readonly只读属性

### 2.7 联合类型&交叉类型
[link](https://blog.csdn.net/qq_40655561/article/details/135724537)
- 在使用联合类型的时候，我们只能使用联合类型中所有类型共有的属性和方法以确保类型安全


## 报错相关
- 在`.vue`文件或者`.jsx`文件中写ts，一旦涉及到泛型，可能会导致解析成`JSX.Element`，[解决方案](https://blog.csdn.net/weixin_44691608/article/details/119518370)
    ```ts
    // *.vue 中的script lang='ts' setup
    // 这种写法，在.ts文件中没有问题，但是在上面两种文件中，formatTreeData变量会被认为是一个JSX.Element
    const formatTreeData = <T>(s, cf):T[]|undefined => {
        // ...sdfsd
    }
    // 正确的写法是在泛型定义末尾加一个逗号
    const formatTreeData = <T,>(s, cf):T[]|undefined => {
        // ...
    }
    ```

- 函数有必须参数，但是用不到
    ```js
    // 例如UI框架定义的分页插件的change事件，有page，size两个参数，但是我们当前只需用到后者
    // 普通写法
    const change = (page, size) => {}
    // ts校验会提示page定义了但是未使用

    // 正常写法
    const change = (_page, size) => {}
    // 以_开头，ts会不进行必要性校验
    ```

- 导入语句报错（可能是未声明模块方法）
```js
// For Node/CommonJS
declare function require(path: string): any;
// For RequireJS/AMD
declare function define(...args: any[]): any;
```

- `cant find module ***`
> 没有声明文件描述代码库
1. `npm install -s @types/***`, 这种只针对已经再@type中有的代码库
2. 单独声明*.d.ts文件
    ```js
    // 这里以在ts中使用微信的js-sdk为例
    wx.chooseImage({ // Error：找不到名称“wx”。ts(2304)
     count: 1, // 默认9
     sizeType: ["original", "compressed"],
     sourceType: ["album", "camera"],
     success: function (res) {
       var localIds = res.localIds;
    },
    })
    // ts校验会提示wx变量的问题，这时候需要单独在声明wx这个变量，在变量声明文件中加上下面这行。
    declare var wx: any;
    ```