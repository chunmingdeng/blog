# import

- ES6模块的运行机制与CommonJS不一样，它遇到模块加载命令import时，不会去执行模块，而是只生成一个动态的只读引用。
- 需要用到时，再到模块里面去取值，换句话说，ES6的输入有点像Unix系统的“符号连接”，原始值变了，import输入的值也会跟着变。

```js
// a.js
console.log('111111');
export var a = 'aaaaaaa';
console.log('222222');

//b.js
import {a} from './my';
console.log('333333');
console.log(a);

// 当node执行b.js，输出
//111111
//222222
//333333
//aaaaaaa
```

- 编译型语言：程序在执行之前需要一个专门的编译过程，把程序编译成为机器语言的文件（即exe文件），运行时不需要重新编译，直接用编译后的文件（exe文件）就行了。
优点：执行效率高
缺点：跨平台性差
- 解释型语言：程序不需要编译，程序在运行的过程中才用解释器编译成机器语言，边编译边执行（没有exe文件）。
优点：跨平台性好、每个平台采用自有的编译机制
缺点：执行效率低、因为边编译边执行
其中程序无需编译，不是说真的不需要编译了，直接执行脚本字符串。而是说不需要在运行之前先编译程序成为exe文件，而是在运行的过程中边运行边执行。
那么我们平时都说js是解释型语言，个人理解是因为他没有生成这种所谓的可执行文件，但其实它的执行中还是掺杂了。